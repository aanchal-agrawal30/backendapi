const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Node.js REST API",
      version: "1.0.0",
      description: "REST API Documentation",
    },
    servers: [
      {
    url: "https://backendapi-6faz.onrender.com",
    description: "Production Server",
  },
      {
        url: "http://localhost:3001",
        description: "Development Server",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["./Router/*.js"], // Scan route files for Swagger annotations
};

const swaggerSpec = swaggerJsdoc(options);

const swaggerDocs = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  console.log("Swagger Docs: http://localhost:3001/api-docs");
};

module.exports = swaggerDocs;