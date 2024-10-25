React Frontend with Role-Based Authentication and TailwindCSS
This project is a frontend for a website built with React and TailwindCSS. It includes role-based authentication for different user types (Admin, Traveller, Traveller-Companion) and a dynamic navigation bar that adapts based on the user’s login state.

The next step is to integrate the backend with this frontend. This guide will help any developer who takes over the project to understand the current setup and what needs to be done.

Features:
Role-Based Authentication: After login, users are redirected to specific pages based on their role (Admin, Traveller, Traveller-Companion).
Protected Routes: Unauthorized access to admin, traveller, and companion pages is blocked.
Dynamic Navbar: The header updates dynamically based on login status, showing either Login/Signup or the user’s role with a Logout button.
Responsive UI: The UI is optimized for both desktop and mobile views with TailwindCSS.
Technologies Used:
React: For the frontend structure and logic.
TailwindCSS: For styling and making the UI responsive.
React Router: For navigation and route protection.

Setup Instructions:
Step 1: Clone the repository
Clone the repository to your local machine:

bash
Copy code
git clone <repository-url>
Step 2: Install dependencies
Navigate to the project folder and install the required dependencies using npm:

bash
Copy code
cd <project-folder>
npm install
Step 3: Start the development server
Run the following command to start the React development server:

bash
Copy code
npm run dev
This will start the development server at http://localhost:5173.

Step 4: Set up TailwindCSS
TailwindCSS is already configured in the project. If you need to make adjustments to the TailwindCSS configuration, you can modify the tailwind.config.js file in the root directory.

Frontend Walkthrough:
Routing and Pages
The app uses React Router for client-side routing. The following routes are configured:

/ - The home page.
/login - The login page (only accessible if the user is not logged in).
/signup - The signup page (only accessible if the user is not logged in).
/admin - Admin dashboard (only accessible by admin users).
/traveller - Traveller dashboard (only accessible by traveller users).
/traveller-companion - Traveller-companion dashboard (only accessible by traveller-companion users).
Dynamic Navbar
The Navbar component is responsible for displaying either the login/signup buttons or the user's role and logout button based on the authentication status.

The logic for rendering different buttons is based on localStorage. The user’s login state and role are stored in localStorage after login.

Protected Routes
The app uses the ProtectedRoute and PublicRoute components to restrict access to certain pages.

PublicRoute ensures that logged-in users can't access the login and signup pages.
ProtectedRoute restricts access to role-specific pages based on the user’s role.
These routes are configured in the App.js file.

Backend Integration Guide:
Here’s how to integrate your backend with this frontend:

Step 1: Login and Signup Integration
In the Login.js and Signup.js files, the login and signup forms currently handle frontend validation but don’t make any API requests. You’ll need to integrate them with your backend API:

Signup: When the user submits the signup form, send a POST request to your backend API (e.g., /api/signup) with the form data (username, email, password, role, etc.).
Login: On the login form submission, send a POST request to your backend API (e.g., /api/login). If the login is successful, store the user’s authentication token and role in localStorage.

Step 2: Role-Based Authentication
Your backend should return the role of the logged-in user, and this should be stored in localStorage as shown in the example above. Based on this role, the frontend will decide which dashboard to display.


Step 3: Protected Routes
In the backend, protect certain routes (e.g., /admin, /traveller) based on the user’s role. The frontend expects this behavior and restricts navigation accordingly.

Future Improvements:
Error Handling: Add user-friendly error messages for failed logins or signups.
Form Validation: Implement better client-side validation for forms.
Loading States: Add loading indicators during API calls (e.g., while logging in).
