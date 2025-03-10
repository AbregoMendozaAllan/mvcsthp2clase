# Node.js Learning Repository

This repository is created as a learning tool to understand the fundamentals of Node.js using Express.js, EJS as the view framework, and MySQL2 for database interactions with MariaDB. It includes simple CRUD operations for managing Clients, Employees, Languages, and Languages learned by Employees.

## Technologies Used

- **Node.js**
- **Express.js** - Web framework for Node.js
- **EJS** - Templating engine for rendering views
- **MySQL2** - Database driver for MySQL and MariaDB
- **MariaDB** - Database for storing records

## Features

- CRUD operations for:
  - Clients
  - Employees
  - Languages
  - Languages learned by employees
- RESTful API structure
- EJS-based UI for rendering views
- MySQL2 integration for database connectivity

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/node-learning-repo.git
   cd node-learning-repo
   ```
2. Install dependencies:
   ```bash
   npm install nodemon ejs mysql2 express dotenv
   ```
3. Configure the database connection:
   - Create a `.env` file and specify the following:
     ```env
     DB_HOST=localhost
     DB_USER=root
     DB_PASSWORD=yourpassword
     DB_NAME=yourdatabase
     PORT=yourport
     ```
4. Run the application:
   ```bash
   npm start
   ```

## Usage

- Open your browser and navigate to `http://localhost:3000`
- Use the available routes to perform CRUD operations on Clients, Employees, and Languages

## License

This project is licensed under the MIT License.

