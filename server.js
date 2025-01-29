const express = require('express'); // Import Express
const cors = require('cors'); // Import CORS middleware

const app = express();

// Use CORS middleware to allow requests from different origins
app.use(cors());

// Middleware to parse incoming JSON requests
app.use(express.json());

// Route
app.get('/', (req, res) => {
    const current_datetime = new Date().toISOString(); // Get the current date and time in ISO 8601 format
    
    // Create the response object with required details
    const response = {
        email: 'christianchibuike14@gmail.com',
        current_datetime,
        github_url: 'https://github.com/Awesome6192/HNG-Stage-0-Backend-Task'
    };
    
    // Send the response as JSON with HTTP status code 200 (OK)
    res.status(200).json(response);
});

// Start the server and listen on port 5000
app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});