# Library Management System API

## Project Overview

The **Library Management System API** is a backend solution that allows the management of books, members, and borrow records for a library. It enables functionalities like adding new books, managing members, borrowing and returning books, and checking overdue borrow records. The API is designed for ease of use and scalability.

## Live URL
[https://library-management-system-api-six.vercel.app/](https://library-management-system-api-six.vercel.app/)

## Technology Stack & Packages
This project is built using the following technologies and packages:

- **Backend Framework:** Express.js
- **Database:** Prisma ORM with a relational database (e.g., PostgreSQL, MySQL)
- **TypeScript** for static type-checking
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Node.js** as the runtime environment
- **Other Dependencies:**
  - `@prisma/client`: Prisma ORM client
  - `bcrypt`: Password hashing
  - `cors`: Cross-origin request handling
  - `express`: Web framework
  - `http-status-codes`: Standard HTTP status codes
  - `uuid`: UUID validation
  - `ts-node-dev`: TypeScript live reloading


## Setting Up and Using the Application
Follow the steps below to set up the project locally:

### Prerequisites

- Node.js (>=14.x)
- npm or yarn
- MongoDB

### Installation

1. **Clone the repository**:

   ```sh
   https://github.com/Nirob-Barman/Library-Management-System-API.git
   ```

2. **Install dependencies**:

   ```sh
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root directory and add the following variables:

   ```
   DATABASE_URL= your_database_url
   ```

4. **Run the application**:
   ```sh
   npm run dev
   ```

### Usage

Once the server is running, you can use the following endpoints:

## Key Features & Functionality

### Book Management
- **Create Book**  
  `POST /api/books`  
  Adds a new book to the library.

- **Read All Books**  
  `GET /api/books`  
  Retrieves a list of all books.

- **Read Book by ID**  
  `GET /api/books/:bookId`  
  Fetches the details of a single book by its ID.

- **Update Book**  
  `PUT /api/books/:bookId`  
  Updates the information of a book.

- **Delete Book**  
  `DELETE /api/books/:bookId`  
  Deletes a book from the library.

### Member Management
- **Create Member**  
  `POST /api/members`  
  Adds a new member to the library.

- **Read All Members**  
  `GET /api/members`  
  Retrieves a list of all members.

- **Read Member by ID**  
  `GET /api/members/:memberId`  
  Fetches the details of a member by their ID.

- **Update Member**  
  `PUT /api/members/:memberId`  
  Updates the information of a member.

- **Delete Member**  
  `DELETE /api/members/:memberId`  
  Deletes a member from the library.

### Borrowing and Returning Books
- **Borrow a Book**  
  `POST /api/borrow`  
  Allows a member to borrow a book.

- **Return a Book**  
  `POST /api/return`  
  Allows a member to return a borrowed book.

### Overdue Borrow List
- **Get Overdue Borrow List**  
  `GET /api/borrow/overdue`  
  Retrieves a list of books that are overdue for return.



## Known Issues/Bugs

- **Overdue Calculation:**  
  The overdue calculation currently uses a fixed 14-day limit. Depending on library policies, this may need to be configurable or adjusted to accommodate different loan periods.

- **Error Handling for Invalid Inputs:**  
  While most errors are handled, some edge cases (e.g., malformed requests, missing required fields) may not be fully covered. More comprehensive input validation and error responses could improve the user experience.

- **Book Availability Check:**  
  If the total number of copies is updated (e.g., if new books are added), the available copies check during borrowing may not update as expected in real-time. This might cause inconsistencies if multiple users are attempting to borrow the same book at the same time.

- **No Authentication:**  
  The current implementation does not include user authentication or authorization. Any member or admin can perform actions such as borrowing books or updating records without verifying their identity or role. This could be a security concern in a production environment.

- **Performance on Large Datasets:**  
  With a large number of books or members, the current database queries may take longer to execute. Optimizing query performance and adding pagination for large lists can improve efficiency.

- **Missing Notifications for Overdue Books:**  
  The system doesn't notify members when their borrowed books are overdue. Adding email or SMS notifications would improve user engagement and ensure timely returns.
