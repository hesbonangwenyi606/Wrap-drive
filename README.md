# Wrap-drive
Wrap-Drive is a modern web application built with Next.js, TypeScript, and Tailwind CSS, designed to provide a fast, scalable, and user-friendly experience. It demonstrates clean architecture, modular components, and responsive UI principles.

## Features

 Next.js 14 for server-side rendering and static generation

 Tailwind CSS for fast and responsive styling

TypeScript for type-safe, scalable code

Modular components and hooks structure
 Assets and images managed under /public

 Config files for linting, formatting, and consistency

## Project Structure
Wrap-Drive-main/
├── app/                  # Core Next.js routes and pages
├── components/           # Reusable UI components
├── hooks/                # Custom React hooks
├── lib/                  # Utilities and helper functions
├── public/               # Static assets (images, icons)
├── styles/               # Global and Tailwind styles
├── package.json          # Project dependencies and scripts
├── next.config.mjs       # Next.js configuration
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── README.md             # Project documentation

## Tech Stack
Category	Technology
Framework	Next.js

Language	TypeScript

Styling	Tailwind CSS

Package Manager	npm / pnpm
Date Utilities	date-fns

UI Library	Custom + React Day Picker
## Getting Started
Clone the Repository
git clone https://github.com/hesbonangwenyi606/Wrap-drive.git
cd Wrap-Drive/Wrap-Drive-main

## Install Dependencies

If you’re using npm:

npm install --legacy-peer-deps


Or with pnpm:

pnpm install --no-frozen-lockfile


 Use --legacy-peer-deps to bypass minor dependency conflicts (e.g., date-fns).

## Start the Development Server
npm run dev


The app will run at:

 http://localhost:3000

## Build for Production

When you’re ready to deploy:

npm run build
npm start


This generates an optimized production build in the .next directory.

## Available Scripts
Command	Description
npm run dev	Starts the development server
npm run build	Builds the app for production
npm start	Runs the production server
npm run lint	Runs linting for code consistency
## Assets

All static images and icons are stored in the /public folder:

public/
 ├── logy.png
 ├── ip1.jpg
 ├── placeholder.svg
 └── ...

## Contributing

Contributions are welcome!
If you’d like to add new features or fix issues:

Fork the repo

Create a new branch

git checkout -b feature-name


Commit your changes

git commit -m "Add new feature"


Push to your branch and create a pull request

## License

This project is licensed under the MIT License — you’re free to use, modify, and distribute it with attribution.