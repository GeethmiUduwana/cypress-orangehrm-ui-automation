# 🧪 Cypress OrangeHRM UI Automation Project

This project demonstrates advanced end-to-end (E2E) UI automation testing using Cypress for the OrangeHRM demo application.

---

# 🚀 Project Overview

The project automates important HR management workflows such as:

- 🔐 Login validation
- 📊 Dashboard verification
- 👤 Employee management
- 🔍 Employee search
- ❌ Logout functionality

The project is designed using reusable and clean automation practices suitable for QA internship and portfolio projects.

---

# 🌐 Application Under Test

https://opensource-demo.orangehrmlive.com/

---

# 🛠️ Technologies Used

- Cypress
- JavaScript
- Node.js

---

# 📁 Project Structure

```bash
cypress-orangehrm-ui-automation/
│
├── cypress/
│   ├── e2e/
│   │   ├── login.cy.js
│   │   ├── dashboard.cy.js
│   │   ├── employee.cy.js
│   │
│   ├── fixtures/
│   │   └── example.json
│   │
│   ├── support/
│   │   ├── commands.js
│   │   └── e2e.js
│
├── cypress.config.js
├── package.json
└── README.md
```

---

# ⚙️ Installation

## 1️⃣ Install dependencies

```bash
npm install
```

---

# ▶️ Running Cypress

## Open Cypress GUI

```bash
npx cypress open
```

---

## Run tests in slow mode

```bash
npx cypress open --config slowMo=1200
```

---

## Run all tests in headless mode

```bash
npx cypress run
```

---

# 🧪 Test Scenarios

## 🔐 Login Testing

- Valid login
- Invalid login
- Error message validation

---

## 📊 Dashboard Validation

- Dashboard visibility
- Successful login verification

---

## 👤 Employee Management

- Add employee
- Validate employee details
- Form interaction testing

---

# ✅ Example Assertions

```js
cy.url().should('include', '/dashboard')

cy.contains('Invalid credentials').should('be.visible')
```

---

# 📸 Cypress Features

- Automatic screenshots
- Video recording
- Test runner GUI
- Real-time debugging

---
# 💼 Portfolio / CV Value

This project demonstrates:

- UI automation testing
- Cypress framework usage
- Reusable test structure
- Real-world web application testing
- End-to-end workflow validation

---


# 👩‍💻 Author

Geethmi Sandunika Uduwana
