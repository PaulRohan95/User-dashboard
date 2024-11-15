User Management Web Application
--------------------------------------

A simple user management web application that allows users to view, add, edit, and delete user details. It uses a mock backend API for demonstration purposes and is built with React (frontend) and Node.js (backend).

Features
-----------------

1. Display a list of users with details like ID, First Name, Last Name, Email, and Department.
2. Add new users and edit existing users.
3. Delete users from the list.
4. Error handling for failed API requests.
5. Responsive and clean user interface.
6. Client-side validation for user inputs.
7. Modular and scalable codebase.

Prerequisites
-------------------
Node.js (v14 or higher)
npm or yarn

Setup Instructions
1. Clone the Repository

git clone https://github.com/yourusername/user-management-app.git
cd user-management-app

2. Install Dependencies
For both frontend and backend, run the following commands:

# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install


3. JSON Server Setup (Mock Backend)
This application uses JSON Server as a mock backend to handle API requests.

4. Start the JSON Server
# From the server directory
npx json-server --watch db.json --port 5000
This command will start the JSON Server on http://localhost:5000, simulating a RESTful API.

5. Run the Frontend

Open a new terminal.
Navigate to the client folder: cd ../client
Start the React development server:
The frontend should be running at http://localhost:3000.

Project Structure

user-management-app/
├── frontend/                     # React frontend
│   ├── public/                 # Public assets
│   ├── src/
│   │   ├── components/         # React components (UserForm, Users)
│   │   ├── services/           # API services (api.js)
│   │   ├── App.js              # Main App component
│   │   └── index.js            # React entry point
├── backend/                     # JSON Server
│   └── server.js                 # Mock database with initial users
├── README.md                   # Project instructions
└── package.json                # Project metadata and dependencies


API Endpoints
This app interacts with the following endpoints:

GET /users: Retrieve the list of users.
POST /users: Add a new user.
PUT /users/{id}: Update an existing user by ID.
DELETE /users/{id}: Delete a user by ID.

Usage
1. Viewing Users: The main page lists all users retrieved from the backend.
2. Adding a User: Click the "Add User" button, fill in the form, and submit.
3. Editing a User: Click the "Edit" button next to a user, modify details, and save.
4. Deleting a User: Click the "Delete" button next to a user.

Technologies Used
Frontend: React, Axios
Backend: JSON Server (for mock API)
Styling: CSS

Known issues

Editing and adding users only simulate successful responses.
Errors while attempting to add user, the update does not show in the Users page

Challenges faced:
Updating the Users page after adding a user. 

Improvements to be made:
Fix the above issue would be the primary point. I would also make UI changes to make the application visually appealing to the user