# Basic CRUD App with Redux Toolkit

This is a basic CRUD (Create, Read, Update, Delete) project built with React, Vite, Redux Toolkit, and other utility libraries. The application allows managing a list of users, including adding new users, deleting existing users, and persisting changes in local storage.

## Features

- Uses React with Vite as the development environment.
- Implements state management with Redux Toolkit.
- Provides success and error notifications using the Sonner library.
- Simulates an external API for deleting users using the JSONPlaceholder API.
- Persists the application's state in the browser's local storage.

## Project Structure

The project follows a typical React structure with Redux Toolkit. Here is an overview of the key files:

- `src/store/index.ts`: Configures the Redux store and middlewares.
- `src/store/user/slice.ts`: Defines the Redux slice for users, including actions and reducers.
- `src/components/...`: React components for the user interface.
- `src/hooks/...`: Custom hooks for handling various functionalities.

## Initial User Data

The project comes with a default list of users that loads initially. The user data is stored in a Redux slice file and retrieved from local storage if available.

## Key Functionalities

1. **Add a New User**: Users can enter a name, email, and GitHub username to add a new user to the list.

2. **Delete a User**: Users can delete an existing user from the list. This simulates a DELETE request to an external API using JSONPlaceholder. If the deletion fails, the deleted user is restored using a custom middleware.

3. **Data Persistence**: The application's state is persisted in the browser's local storage using a custom middleware.

## How to Run the Project

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Run `pnpm install` to install the dependencies.
4. Run `pnpm run dev` to start the Vite development server.
5. Open `http://localhost:5173` in your browser to view the running application.

## Additional Information

- **Notifications**: Utilizes the Sonner library for success and error notifications.
- **API Simulation**: Uses JSONPlaceholder to simulate external API requests for user deletion.
- **Local Storage**: Persists the application's state in the browser's local storage.
