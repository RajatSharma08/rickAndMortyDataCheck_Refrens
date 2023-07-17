# rickAndMortyDataCheck_Refrens

Projects which fetch data from Rick and Morty API in REST form and displays them in a card form.

The node-version directory contains the Node.js version of the application, while the react-version directory contains the React version.

# Rick & Morty Character Profiles

This repository contains two versions of the Rick & Morty Character Profiles application: one built with Node.js and JavaScript, and the other built with React.

## Node.js Version

The Node.js version of the application is a server-side implementation that fetches character data from the [Rick & Morty API](https://rickandmortyapi.com/) and serves it as a REST API.

### Project Structure

- `index.js`: The main server file that sets up an Express server, handles routes, and serves static files.
- `index.html`: The HTML file for the client-side rendering of the characters' profiles.
- `app.js`: The JavaScript file that fetches character data from the server and renders the character profiles on the web page.
- `styles.css`: The CSS file that provides styling for the web page.

To run the Node.js version, make sure you have Node.js and the necessary dependencies installed. Then, execute the following commands:

```bash
npm install
npm start 
```
The server will start running on 'http://localhost:3000'.

# React Version

The React version of the application is a client-side implementation that fetches character data from the Rick & Morty API and dynamically renders the character profiles in a grid layout.

## Project Structure
public/index.html: The HTML file that serves as the entry point for the React application.
public/app.js: The JavaScript file that contains the React component responsible for fetching character data and rendering the profiles.
public/styles.css: The CSS file that provides styling for the web page.
To run the React version, open the public/index.html file in a web browser.

### Repository Structure

The repository is organized as follows:
```
├── node-version
│   ├── index.js
│   ├── public
│   │   ├── index.html
│   │   ├── app.js
│   │   └── styles.css
│   ├── package.json
│   └── README.md
├── react-version
│   ├── public
│   │   ├── index.html
│   │   ├── app.js
│   │   └── styles.css
│   └── README.md
└── README.md
```

Feel free to explore each version and choose the one that suits your needs. Happy browsing of Rick & Morty character profiles!

