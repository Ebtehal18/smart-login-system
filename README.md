# Smart Login System

The **Smart Login System** is a simple web application that allows users to sign up and log in with validation. It has three main pages:
1. **Login Page**: Users can log in using their email and password.
2. **Signup Page**: New users can create an account, but they cannot sign up with an already registered email. Their input is validated to ensure correctness.
3. **Welcome Page**: Once logged in, users are redirected to the welcome page.

## Features
- **Signup with Validation**: Users must provide valid data (e.g., name, email, and password) to sign up. If the email already exists, the user will be notified.
- **Login with Validation**: Users must provide correct credentials to log in. If the credentials are incorrect, an error message will be displayed.
- **Persistent User Data**: User data is saved in local storage for demonstration purposes.
  
## Pages Overview

### 1. **Login Page**
- Users must enter their email and password to log in.
- If the entered credentials don't match any registered users, an error message is shown.
- Once successfully logged in, the user is redirected to the welcome page.

### 2. **Signup Page**
- Users must provide the following information:
  - **Name**: At least 3 characters, no special characters.
  - **Email**: Must follow the correct email format (e.g., `example@domain.com`).
  - **Password**: Minimum 8 characters with at least one letter and one number.
- If the email is already registered, the user is prompted to use a different email.
- If the data is correct and the email is unique, the new user is registered and redirected to the login page.

### 3. **Welcome Page**
- The page greets the user with a personalized welcome message.
- Users can log out, which will return them to the login page.

## Validation Logic

### Signup Validation
- **Name Validation**: The name must be between 3 and 30 characters long and can contain only letters.
- **Email Validation**: The email must be unique and follow the standard email format.
- **Password Validation**: The password must be at least 8 characters long and contain both letters and numbers.

### Login Validation
- **Email Check**: The email must match a registered email in the system.
- **Password Check**: The password must match the one registered for that email.

## Technologies Used
- **HTML**: Structure of the web pages.
- **CSS**: Styling of the web pages.
- **JavaScript**: Handles client-side functionality such as form validation and storing user data in local storage.

- Live Demo(https://ebtehal18.github.io/smart-login-system/)
