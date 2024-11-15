import React, { useState, useEffect } from "react";
import Users from "./components/Users";
import UserForm from "./components/UserForm";
import { fetchUsers, addUser, editUser } from "./services/api";

function App() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  // Fetch users from the API
  const getUsers = async () => {
    try {
      const response = await fetchUsers();
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  // Initial fetch of users
  useEffect(() => {
    getUsers();
  }, []);

  // Handle the form submission for adding or editing users
  const handleUserSubmit = async (newUserData) => {
    try {
      if (editingUser && editingUser.id) {
        // Editing an existing user
        await editUser(editingUser.id, newUserData);
      } else {
        // Adding a new user
        const addedUser = await addUser(newUserData);
        setUsers([...users, addedUser]); // Optionally update the list without re-fetching
      }
      fetchUsers(); // Re-fetch users to get the latest list
      setEditingUser(null); // Close the form after submission
    } catch (error) {
      console.error("Failed to save user:", error);
    }
  };

  return (
    <div>
      {editingUser ? (
        <UserForm
          user={editingUser}
          onClose={() => setEditingUser(null)}
          onSubmit={handleUserSubmit}
        />
      ) : (
        <Users
          users={users}
          onEdit={setEditingUser}
          onAdd={() => setEditingUser({})}
        />
      )}
    </div>
  );
}

export default App;
