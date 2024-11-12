# Loan Calculator FRONT

## Description

This is a simple frontend application built using Vite, TypeScript and React that allows users to submit loan data to a backend API. The application includes a form where users can input loan details, which are then validated and sent to a backend [loan-calculator](https://github.com/adrian-prajsnar/loan-calculator) service for processing. This frontend is designed to handle various form validations, display toast notifications for success and error states, and ensure seamless data entry for users.

**Features:**

- Submit loan data, including installment amount, interest rate, financing amount, and more.
- Validate form fields to ensure data completeness, non-negative values, and correct email format.
- Notify users of any invalid inputs or submission errors through toast notifications.

## Table of Contents

- [Description](#description)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation & Usage](#installation-&-usage)
- [License](#license)

## Getting Started

To get this project up and running on your local machine, follow these steps:

### Prerequisites

Ensure you have the following software installed:

- Node.js (version 21.5.0 or later)
- npm (Node Package Manager)

### Installation & Usage

1. Clone the repository:

   ```
   https://github.com/adrian-prajsnar/loan-calculator-front.git
   ```

2. Navigate to the project folder:

   ```
   cd loan-calculator-front
   ```

3. Install dependencies:

   ```
   npm install
   ```

4. Start the development server:

   ```
   npm run dev
   ```

5. Open your browser and go to `http://localhost:5173` to view the app.

6. To build the project:

   ```
   npm run build
   ```

## License

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
