# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
# Project Management App

## Description
The Project Management App is a web-based application designed to help users efficiently manage their projects, tasks, and teams. It provides a user-friendly interface for creating, assigning, and tracking tasks, as well as monitoring project progress. 

## Folder/File Structure

project-management-app/
│
├── app/
│ ├── static/
│ ├── templates/
│ ├── init.py
│ ├── models.py
│ ├── routes.py
│ └── ...
│
├── tests/
│ ├── test_routes.py
│ └── ...
│
├── requirements.txt
├── README.md
└── ...

markdown
Copy code

- **app/**: Contains the main application code.
  - **static/**: Static files like CSS, JavaScript, and images.
  - **templates/**: HTML templates.
  - **\_\_init\_\_.py**: Initializes the Flask application.
  - **models.py**: Defines database models using SQLAlchemy.
  - **routes.py**: Defines the application routes and their corresponding view functions.
- **tests/**: Contains unit tests for the application.
- **requirements.txt**: Lists all Python dependencies needed to run the application.

## Libraries Used

- Flask: A micro web framework for Python.
- SQLAlchemy: An SQL toolkit and Object-Relational Mapping (ORM) library for Python.
- WTForms: A flexible forms validation and rendering library for Python web development.
- Bootstrap: A popular CSS framework for building responsive and mobile-first websites.

## Additional Notes

- **Known Issues**: Currently, there's an issue with task sorting in the dashboard view. We're actively working on a fix for this.
- **Future Improvements**: 
  - Implementing real-time updates using web sockets for better collaboration.
  - Adding support for file attachments to tasks.
  - Enhancing the user interface for a more intuitive experience.