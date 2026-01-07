MFA Sample – Frontend Application

This repository contains a Micro Frontend Architecture (MFA)–based frontend application built with React and Vite. The application is structured to support scalability, independent module development, and shared libraries.

🛠️ Tech Stack

Frontend Framework: React

Build Tool: Vite

CSS Framework: Tailwind CSS

Architecture: Micro Frontend Architecture (MFA)

State Management: Redux

API Layer: RTK Query (Redux Toolkit Query)

Monorepo Tool: Turbo (similar to Lerna)

Package Management: npm

Shared Libraries:

Currently hardcoded inside the /packages folder

Planned to be published as npm packages in the future

📁 Repository Structure

apps/ – Contains individual micro frontend applications

packages/ – Shared libraries (Redux store, utilities, UI components, etc.)

Git submodules are used for managing micro frontend apps

🚀 Getting Started

Follow the steps below from the root directory to set up and run the application locally.

Step 1: Clone the repository
git clone https://github.com/VigneshBalaji96/mfa-sample.git

Step 2: Initialize git submodules
git submodule init

Step 3: Update git submodules
git submodule update

Step 4: Checkout and pull latest code for all submodules
git submodule foreach 'git checkout main && git pull origin main'

Step 5: Verify npm version

Check your local npm version:

npm --version


Ensure it matches the version specified in package.json:

"packageManager": "npm@11.4.2"


⚠️ Using a different npm version may cause dependency or build issues.

Step 6: Install dependencies
npm install

Step 7: Build the application
npm run build

Step 8: Start the application
npm start

🌐 Application URL

Once started, the application will be available at:

http://localhost:5000/

🔄 Development Notes

Any changes made inside the apps/ directory require a server restart.

Stop the running server and start it again to reflect new changes.

🧹 Cleaning the Workspace

To clean all build artifacts and dependencies:

npm run clear:all

📌 Future Enhancements

Publish shared libraries from /packages to npm

Improve hot reload support for micro frontends

Introduce dynamic module loading