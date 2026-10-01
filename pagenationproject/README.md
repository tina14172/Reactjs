# Employee Data Management

A React.js project that displays employee information in a responsive Bootstrap table. Employee data is fetched from a local JSON Server API and displayed with pagination.

## 📌 Project Overview

This project demonstrates how to:

* Fetch data from a REST API using `fetch()`
* Display employee data in a table
* Use React `useState` and `useEffect`
* Implement pagination
* Select the number of records displayed per page
* Style the application using Bootstrap
* Display employee salary in Indian currency format
* Create a responsive employee table

The application fetches employee data from:

```text
http://localhost:3000/employees
```

The JSON database contains **100 employee records** with details such as ID, name, email, age, gender, department, position, salary, and city.

## 🛠️ Technologies Used

* React.js
* JavaScript
* Bootstrap
* JSON Server
* HTML
* CSS
* Vite

## 📂 Project Structure

```text
Employee-Data/
│
├── App.jsx
├── main.jsx
├── db.json
├── package.json
└── README.md
```

## 📄 Files Description

### `App.jsx`

Contains the main React component.

It:

* Fetches employee data from the JSON Server API
* Stores data using React state
* Displays employee records
* Implements pagination
* Provides Previous and Next buttons
* Allows users to select records per page

The project uses `useState()` for employee and pagination state and `useEffect()` to fetch API data.

### `db.json`

Contains the employee data used by JSON Server.

Each employee record contains:

```text
id
name
email
age
gender
department
position
salary
city
```

Example:

```json
{
  "id": 1,
  "name": "Aarav Sharma",
  "email": "aarav.sharma@gmail.com",
  "age": 25,
  "gender": "Male",
  "department": "IT",
  "position": "Software Developer",
  "salary": 45000,
  "city": "Rajkot"
}
```

The uploaded database contains employee records from ID 1 through ID 100.

### `main.jsx`

This file starts the React application and renders the `App` component.

Bootstrap CSS and JavaScript are also imported here.

## ✨ Features

### 1. Employee Table

The application displays:

* ID
* Name
* Email
* Age
* Gender
* Department
* Position
* Salary
* Location

The table uses Bootstrap classes such as `table`, `table-hover`, `table-responsive`, and `table-dark`.

### 2. Pagination

The application divides employee records into multiple pages.

Default:

```text
5 employees per page
```

Available options:

```text
5
25
50
100
```

The pagination calculates the first and last index of the records displayed on the current page.

### 3. Previous & Next Buttons

The **Previous** button is disabled on the first page.

The **Next** button is disabled on the last page.

```jsx
<button
  disabled={currentpage == 1}
>
  Previous
</button>

<button
  disabled={currentpage == totalpages}
>
  Next
</button>
```

### 4. Salary Formatting

Salary is displayed using Indian number formatting:

```jsx
₹{element.salary.toLocaleString("en-IN")}
```

Example:

```text
₹45,000
₹65,000
₹95,000
```

### 5. Responsive Design

Bootstrap's responsive table allows the employee data to remain usable on smaller screens.

## 🚀 Installation

### Step 1: Clone the project

```bash
git clone <your-github-repository-url>
```

### Step 2: Open the project

```bash
cd Employee-Data
```

### Step 3: Install dependencies

```bash
npm install
```

### Step 4: Install JSON Server

If JSON Server is not installed:

```bash
npm install json-server
```

### Step 5: Start JSON Server

Run:

```bash
npx json-server --watch db.json --port 3000
```

The API will be available at:

```text
http://localhost:3000/employees
```

### Step 6: Start React

Open another terminal and run:

```bash
npm run dev
```

Then open the URL shown by Vite in your browser.

## 🔗 API

### Get all employees

```text
GET http://localhost:3000/employees
```

The React application uses this API to retrieve employee information.

## 📊 Pagination Logic

The application calculates the total number of pages using:

```jsx
let totalpages = Math.ceil(allData.length / perpagesData);
```

It then calculates the records displayed on the current page:

```jsx
let lastindex = currentpage * perpagesData;
let firstindex = lastindex - perpagesData;

let currentpageData = allData.slice(firstindex, lastindex);
```

## 🎨 Bootstrap

Bootstrap is imported in `main.jsx`:

```jsx
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
```

This provides the responsive table, buttons, cards, badges, spacing, and other UI styling.

## 📱 Output

The application displays:

```text
Employee Data
Complete employee information

┌────┬──────────────┬──────────────────────┬─────┬────────┬────────────┐
│ ID │ NAME         │ EMAIL                │ AGE │ GENDER │ DEPARTMENT │
├────┼──────────────┼──────────────────────┼─────┼────────┼────────────┤
│ 1  │ Aarav Sharma │ aarav.sharma@...     │ 25  │ Male   │ IT         │
│ 2  │ Diya Patel   │ diya.patel@...       │ 24  │ Female │ HR         │
└────┴──────────────┴──────────────────────┴─────┴────────┴────────────┘

Data per page: 5

Previous                    Next
```

## 🎯 Learning Objectives

This project helps practice:

1. React components
2. React Hooks
3. API fetching
4. JSON Server
5. REST API
6. Array `map()`
7. Array `slice()`
8. Pagination
9. Conditional button disabling
10. Bootstrap responsive design
11. State management
12. Working with JSON data

## 👩‍💻 Author

**Tina**

---

⭐ If you find this project useful, consider giving the repository a star.
