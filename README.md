# Bookshelf - A React Library Application

This is a simple single-page application (SPA) built with React that allows users to manage a personal library of books. It features client-side routing and interacts with a local JSON server for data persistence.

## Features

*   **View Your Library**: See all your books displayed in a clean, responsive grid layout.
*   **Delete Books**: Remove books from your library with a single click.
*   **Client-Side Routing**: Navigate between different sections of the application (`My Library`, `Expired`, `About`) without full page reloads, thanks to React Router.
*   **Custom Styling**: The application is styled with custom CSS for a unique look and feel.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

*   Node.js and npm (or yarn) installed on your machine.
*   `json-server` installed globally. If you don't have it, run:
    ```sh
    npm install -g json-server
    ```

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone <your-repository-url>
    ```

2.  **Navigate to the project directory:**
    ```sh
    cd bookshelf
    ```

3.  **Install the dependencies:**
    ```sh
    npm install
    ```

4.  **Start the backend JSON server:**
    In your terminal, run the following command to serve the `db.json` file.
    ```sh
    json-server --watch db.json --port 3000
    ```

5.  **Start the React application:**
    In a separate terminal window, run:
    ```sh
    npm start
    ```

The application should now be running and accessible at `http://localhost:3001` (or another port if 3001 is in use).

## Technologies Used

*   **React**: A JavaScript library for building user interfaces.
*   **React Router**: For declarative, client-side routing.
*   **JSON Server**: To create a full fake REST API with zero coding.
*   **CSS**: For custom styling and layout.
