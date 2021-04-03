# Develop a Java app with Spring, Webpack, and React

[![Develop on Okteto](https://okteto.com/develop-okteto.svg)](https://cloud.okteto.com/deploy?repository=java-gradle-webpack-react)

This example shows how to leverage [Okteto](https://github.com/okteto/okteto) to develop a Java app using Okteto, Spring, Webpack, and React.


## Deployment

Click on the big green button at the top of this page to deploy your application directly in [Okteto Cloud](https://cloud.okteto.com).

This will deploy the following components:
- The Java + React application.
- A Postgres database.
- A load balancer with an HTTPS endpoint.

The URL of your application will be displayed [in your dashboard]((https://cloud.okteto.com) once the application is running.

## Development

After launching the application, run `okteto up` to activate your development environment. 

```console
$ okteto up
```

Working in your development container is the same as working on your local machine. 

You can build and start the application by running the following command:

```console
cindy:books app> `gradle bootRun`
```

This command builds both the java and react components of the application and serves everything using Tomcat over port 8080.  With the application running, go back to the browser, and reload the page to test that your application is running.

Check out our [Java development guide](https://okteto.com/docs/samples/java) to learn how to hot-reload your application, connect a remote debugger, and many more.


