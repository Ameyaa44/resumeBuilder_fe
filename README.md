# Create react project
    - npm create vite@latest -- --template react : to create react app directly/vite with react
    - remove unwanted code
    - install react-bootstrap & mui & react-icon

    -> Material UI installation
        npm install @mui/material @emotion/react @emotion/styled
        - Material Icon installation
            npm install @mui/icons-material

    -> React Bootstrap installation
        npm install react-bootstrap bootstrap

        - Bootstrap cdn
            <link rel="stylesheet"  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css"
            integrity="sha384-SgOJa3DmI69IUzQ2PVdRZhwQ+dy64/BUtbMJw1MZ8t5HZApcHrRKUc4W0kG879m7" crossorigin="anonymous"/>
        - Script cdn
            <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script>
            <script src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js" crossorigin></script>
            <script src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js" crossorigin></script>
            <!-- <script>var Alert = ReactBootstrap.Alert;</script> -->

    -> React icon installation
        npm i react-icons
    
    - created pages & route 
        imported pages,routes in App.jsx
             route - npm i react-router-dom
        BrowserRouter in main.jsx

Server - json-server --watch db.json

Sweet Alert -
Installation
Import

//navbg-#04267ef7