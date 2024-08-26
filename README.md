# Payment App Clone

## Overview
This project is a basic clone of a popular payment application, developed using HTML, CSS, and JavaScript. It is designed to help understand the front-end aspects of how big banking and transaction applications work. **This project is purely for educational purposes** and does not include any backend logic or actual payment processing.

## Disclaimer
This project is intended **solely for educational purposes**. Any illegal activities or misuse of this code are strongly discouraged. The author is **not responsible** for any malicious or inappropriate use of this code. If I can build this from scratch, anyone with an internet connection and some patience can do it too.

## Features
- **Login Page**: Users enter their email or mobile number and password. Includes basic validation and a password visibility toggle.
- **Phone Verification Page**: After entering the correct password, users are prompted to verify their identity with a one-time code sent to their mobile number, simulating a two-factor authentication (2FA) process.
- **OTP (One-Time Password) Page**: Users enter the code sent to their phone to complete the login process, simulating the final step in 2FA.
- **Loading Animation**: Displays a loading animation during backend processing, simulating the user waiting period.

## File Structure
- `index.html`: Login page for email or mobile number and password input.
- `phone.html`: Page for phone number verification via a one-time code.
- `otp.html`: Page for entering the one-time code.
- `loading.html`: Page displaying a loading animation during processing.
- `static/styles/main.min.css`: Main CSS file for application styling.
- `static/scripts/jquery.min.js`: jQuery library used in the project.
- `static/scripts/main.js`: Main JavaScript file for redirection and form interactions.

## How to Run
1. Clone this repository to your local machine.
2. Open `index.html` in your web browser.
3. Follow the login flow to experience the user journey.

## Educational Purpose
This project is meant to be a learning tool, helping you understand how transaction applications are structured on the front end. By studying this code, you can gain insights into the user interface design and security mechanisms commonly employed in real-world financial applications.

## Final Notes
This project is a **learning resource**. It mimics the structure of a payment application but does not perform any actual transaction processing or handle sensitive user data. Use it to enhance your knowledge of front-end development in the context of financial applications.