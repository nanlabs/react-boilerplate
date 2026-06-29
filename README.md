<div align="center">
<h1>React Boilerplate</h1>

</div>

<div align="center">
  <a href="https://www.npmjs.com/package/create-awesome-node-app">
    <img src="https://img.shields.io/badge/Generated%20with-Create%20Awesome%20Node%20App-6B46C1?style=for-the-badge&logo=npm" alt="Generated with Create Awesome Node App">
  </a>
  <a href="https://github.com/Create-Node-App">
    <img src="https://img.shields.io/badge/Powered%20by-Create%E2%80%A2Node%E2%80%A2App-223344?style=for-the-badge&logo=github" alt="Powered by Create-Node-App">
  </a>
</div>

<div align="center">

[![Main Validation](https://github.com/nanlabs/react-boilerplate/actions/workflows/ci.yml/badge.svg)](https://github.com/nanlabs/react-boilerplate/actions/workflows/ci.yml)
[![Deployment to GitHub Pages](https://github.com/nanlabs/react-boilerplate/actions/workflows/deployment.yml/badge.svg)](https://github.com/nanlabs/react-boilerplate/actions/workflows/deployment.yml)
[![License: MIT][licensebadge]][licenseurl]

[licensebadge]: https://img.shields.io/badge/License-MIT-blue.svg
[licenseurl]: https://github.com/nanlabs/react-boilerplate/master/LICENSE

</div>

<div align="center">
  <p><strong>NaNLABS</strong> uses and actively contributes to the maintenance of <a href="https://www.npmjs.com/package/create-awesome-node-app">Create Awesome Node App</a> — an open-source CLI tool for scaffolding Node.js projects.</p>
</div>

---

This project was generated using [create-awesome-node-app](https://www.npmjs.com/package/create-awesome-node-app). **DON'T USE THIS TEMPLATE AS IT!** Generate yours using the command and following the options in the interactive menu. Check the docs for more information!

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
| `build`            | Builds the application to `dist/`                                                                           |

## Testing

To add a unit test, create a `.test.js` file anywhere inside of `src/`. Jest will automatically find these files.

## Contributing

You can report bugs, request features and create Pull Requests in the [Create-Node-App/react-extensions](https://github.com/Create-Node-App/react-extensions) repository!
