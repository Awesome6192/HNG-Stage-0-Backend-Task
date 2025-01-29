# HNG Stage 0 Backend Task

A simple REST API built with Node.js that returns personal information in JSON format.

## Description

This API was developed as part of the HNG Internship Stage 0 task. It provides a single endpoint that returns:
- Registered email address (used to register on the HNG12 Slack workspace).
- The current datetime as an ISO 8601 formatted timestamp.
- The GitHub URL of the project's codebase.

## API Specification

### Endpoint
- URL: `GET https://hng-stage-0-backend-task.onrender.com/`
- Request Method: `GET`
- Response Format: JSON

### Sample Response
```json
{
    "email": "your-email@example.com",
    "current_datetime": "2025-01-30T09:30:00Z",
    "github_url": "https://github.com/yourusername/your-repo"
}
```

## Local Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/Awesome6192/HNG-Stage-0-Backend-Task.git
   cd HNG-Stage-0-Backend-Task
   ```

2. Initialize the project:
   ```bash
   npm init -y 
   ```

3. Install dependencies:
   ```bash
   npm install express cors
   ```

4. Run the application:
   - For development:
     ```bash
     nodemon server.js
     ```
   - For production:
     ```bash
     npm start
     ```

## Deployment

This API is deployed on [Render](https://render.com) and can be accessed at: [https://hng-stage-0-backend-task.onrender.com/](https://hng-stage-0-backend-task.onrender.com/)

## Technologies Used

- Node.js
- Express
- CORS

## Related Links

- [HNG Python Developers](https://hng.tech/hire/python-developers)
- [HNG C# Developers](https://hng.tech/hire/csharp-developers)
- [HNG Golang Developers](https://hng.tech/hire/golang-developers)
- [HNG PHP Developers](https://hng.tech/hire/php-developers)
- [HNG Java Developers](https://hng.tech/hire/java-developers)
- [HNG NodeJS Developers](https://hng.tech/hire/nodejs-developers)