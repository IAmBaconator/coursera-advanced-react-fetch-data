# Overview

This lab demonstrates how to fetch and display customer data in a React application using an external API. The app retrieves a single customer record from the Random User API and dynamically renders the customer’s name and image once the data has been successfully loaded.

The project focuses on handling asynchronous operations in React and updating the UI based on fetched data, replacing placeholder content displayed during the initial loading state.

---

# Key Concepts Demonstrated

- Fetching data from an external API using the `fetch()` function
- Handling asynchronous responses with JavaScript Promises and `.then()` chaining
- Using React hooks (`useEffect`, `useState`) to manage side effects and component state
- Conditional rendering to update the UI once data is available
- Extracting and displaying data from a JSON response

---

# Lab Notes

- The application initially renders a placeholder heading displaying **“Data pending…”** while the API request is in progress.
- The `useEffect` hook is used to trigger the data fetch when the component mounts.
- Once the Promise resolves, the returned customer data is stored in state.
- The UI updates automatically to display the customer’s name and profile image retrieved from the API.

This lab reinforces the flow of data from API request → Promise resolution → state update → UI render.

---

# Possible Enhancements

- Add error handling for failed API requests
- Replace static placeholder text with a loading spinner or skeleton UI
- Allow users to fetch a new customer on demand
- Refactor the fetch logic using `async / await`
- Display additional customer details from the API response
