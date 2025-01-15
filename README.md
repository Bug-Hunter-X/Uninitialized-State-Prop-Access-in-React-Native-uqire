# Uninitialized State/Prop Access in React Native

This repository demonstrates a common error in React Native applications: attempting to access state or props before they've been properly initialized.  This can lead to unexpected behavior and crashes.

## The Problem

The `bug.js` file contains a React component that tries to render a state variable (`this.state.someValue`) before the state has been fully populated.  In React Native, this commonly occurs if the state is being fetched from an asynchronous operation (like an API call) or if the initial state is not properly defined.

## The Solution

The `bugSolution.js` file illustrates the correct approach: using optional chaining and the `useEffect` hook to ensure the state is properly initialized before attempting to access it.  Conditional rendering is used to prevent rendering until the data is available.  Additionally, error handling provides a fallback in case the data retrieval fails.

## How to Reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run the project using a React Native emulator or device.
4. Observe the error in `bug.js`.  Then switch to `bugSolution.js` to see how to avoid this error.