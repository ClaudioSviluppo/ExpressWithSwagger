const config = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Express API documentate con Swagger",
        version: "0.1.0",
        description:
          "This is a simple CRUD API application made with Express and documented with Swagger",
        license: {
          name: "MIT",
          url: "https://spdx.org/licenses/MIT.html",
        },
        contact: {
          name: "Claudio",
          url: "https://google.com",
          email: "cforgia@gmail.com",
        },
      },
      servers: [
        {
          url: "http://localhost:3000/api",
        },
      ],
    },
    apis: ["./routes/*.js"],
  };

module.exports = config;