<div align="center">
<h1>React Webpack Boilerplate</h1>

</div>
<div align="center">

[![Main Validation](https://github.com/nanlabs/react-webpack-boilerplate/actions/workflows/ci.yml/badge.svg)](https://github.com/nanlabs/react-webpack-boilerplate/actions/workflows/ci.yml)
[![Deployment to GitHub Pages](https://github.com/nanlabs/react-webpack-boilerplate/actions/workflows/deployment.yml/badge.svg)](https://github.com/nanlabs/react-webpack-boilerplate/actions/workflows/deployment.yml)
[![License: MIT][licensebadge]][licenseurl]

[licensebadge]: https://img.shields.io/badge/License-MIT-blue.svg
[licenseurl]: https://github.com/nanlabs/react-webpack-boilerplate/master/LICENSE

</div>

This project was generated using [create-react-webpack-app](https://www.npmjs.com/package/create-react-webpack-project). **DON'T USE THIS TEMPLATE AS IT!** Generate yours using the command and following the options in the interactive menu. Check the docs for more information!

## Quickstart

```sh
fnm use
npm install
npm run start
```

## Useful resources

- [Project structure](./docs/PROJECT_STRUCTURE.md)
- [State Management recommendations](./docs/STATE_MANAGEMENT.md)

## Development

While developing, you will probably rely mostly on `npm run start`; however, there are additional scripts at your disposal:

| `npm run <script>` | Description                                                                                                             |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------- |
| `dev`              | Serves your app at for local development                                                                                |
| `test`             | Runs unit tests with Jest. See [testing](#testing)                                                                      |
| `test:watch`       | Runs `test` in watch mode to re-run tests when changed                                                                  |
| `lint`             | [Lints](http://stackoverflow.com/questions/8503559/what-is-linting) the project for potential errors                    |
| `lint:fix`         | Lints the project and [fixes all correctable errors](http://eslint.org/docs/user-guide/command-line-interface.html#fix) |

## Production

Generate production files running

```sh
npm run build
```

Generate and serve production files running

```sh
npm run serve
```

Available scripts:

| `npm run <script>` | Description                                                                                                 |
| ------------------ | ----------------------------------------------------------------------------------------------------------- |
| `preview`          | Serves your app using your production ready setup (`.env.production` and `NODE_ENV` equals to `production`) |
| `build`            | Builds the application to ./build                                                                           |

## Testing

To add a unit test, create a `.test.js` file anywhere inside of `src/`. Jest will automatically find these files.

## Contributing

You can report bugs, request features and create Pull Requests in the [Create-Node-App/react-extensions](https://github.com/Create-Node-App/react-extensions) repository!
