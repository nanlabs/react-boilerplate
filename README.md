<div align="center">
<h1>React Webpack Boilerplate</h1>

</div>
<div align="center">

[![Main Validation](https://github.com/nanlabs/react-webpack-boilerplate/actions/workflows/ci.yml/badge.svg)](https://github.com/nanlabs/react-webpack-boilerplate/actions/workflows/ci.yml)
[![Deployment to GitHub Pages](https://github.com/nanlabs/react-webpack-boilerplate/actions/workflows/deployment.yml/badge.svg)](https://github.com/nanlabs/react-webpack-boilerplate/actions/workflows/deployment.yml)
[![License: MIT][licensebadge]][licenseurl]

[licensebadge]: https://img.shields.io/badge/License-MIT-blue.svg
[licenseurl]: https://github.com/vlang/nanlabs/react-webpack-boilerplate/master/LICENSE

</div>

This project was generated using [React Webpack Starter](https://github.com/Create-Node-App/create-react-webpack-app).

## Development

### Node engine

Node 16.13.2

### Running the Project

Start development environment running

```sh
$ npm run start
```

Start development environment with docker running

```sh
$ npm run docker:dev
```

`docker:dev` generate a docker image named app and run it in a container. Run `docker:dev:start` for only start a container without build a new docker image

While developing, you will probably rely mostly on `npm run start`; however, there are additional scripts at your disposal:

| `npm run <script>`    | Description                                                                                                             |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `start`               | Serves your app at `localhost:3000`                                                                                     |
| `build:dev`           | Builds the application to ./build (_the build output dir could be configured in `./config/common-paths.js`_)            |
| `build:dev:watch`     | Builds the application and watch for changes                                                                            |
| `build:dev:dashboard` | Builds the application with Dashboard                                                                                   |
| `serve:dev:dashboard` | Builds the application with Dashboard                                                                                   |
| `test`                | Runs unit tests with Jest. See [testing](#testing)                                                                      |
| `test:watch`          | Runs `test` in watch mode to re-run tests when changed                                                                  |
| `lint`                | [Lints](http://stackoverflow.com/questions/8503559/what-is-linting) the project for potential errors                    |
| `lint:fix`            | Lints the project and [fixes all correctable errors](http://eslint.org/docs/user-guide/command-line-interface.html#fix) |

### Hot Reloading

Hot reloading is enabled by default when the application is running in development mode (`npm run start`). This feature is implemented with webpack's [Hot Module Replacement](https://webpack.github.io/docs/hot-module-replacement.html) capabilities, where code updates can be injected to the application while it's running, no full reload required. Here's how it works:

For **JavaScript** modules, a code change will trigger the application to re-render from the top of the tree. **Global state is preserved (i.e. redux), but any local component state is reset**. This differs from React Hot Loader, but we've found that performing a full re-render helps avoid subtle bugs caused by RHL patching.

## Production

Generate production files running

```sh
$ npm run build
```

Generate and serve production files running

```sh
$ npm run serve
```

Available scripts:

| `npm run <script>` | Description                                                                                                                     |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| `serve`            | Serves your app at `localhost:3000` using your production ready setup (`.env.production` and `NODE_ENV` equals to `production`) |
| `build`            | Builds the application to ./build (_the build output dir could be configured in `./config/common-paths.js`_)                    |
| `build:analyze`    | Builds the application with Bundle Analyzer Plugins instaled                                                                    |
| `build:visualyze`  | Builds the application with Bunle Visualizer Plugins instaled                                                                   |

## Project Structure

```
.
├── build                    # Production build, result of `npm run build`
├── config                    # Webpack and Jest configuration
├── public                   # Static public assets (not imported anywhere in source code)
│   └── index.html           # Main HTML page template for app
├── src                      # Application source code
│   ├── components           # Global Reusable Components
│   ├── hooks                # Reusable React hooks
│   ├── layouts              # Reusable React layout components for `page components`
│   ├── libs                 # Clients and Libs global configuration for example http client
│   │   └── http
│   ├── pages                # Components associated with routes
│   ├── providers            # React Providers components charge to share global dependencies (DI)
│   ├── routes               # Main route definitions and async split points
│   │   └── AppRoutes.tsx    # Bootstrap main application routes
│   │   ├── Routes.ts        # Constant files for unique URL path and pattern
│   ├── services             # Services that the app consumes
│   ├── theme                # Application-wide styles and theme
│   ├── utils                # Utility functions
│   │   └── test             # Utility test and config functions
|   ├── ...
|   ├── index.tsx            # Application bootstrap
|   ├── app.tsx              # Entry point rendering
└── static                   # Static public assets imported anywhere in source code
```

## Testing

To add a unit test, create a `.test.js` file anywhere inside of `./test`. Jest and webpack will automatically find these files.

## More info

You can learn more about the operation of this starter kit in the official [github repository](https://github.com/Create-Node-App/create-react-webpack-app).
