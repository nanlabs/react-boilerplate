const chalk = require('chalk');

const clearConsole = () =>
  process.stdout.write(process.platform === 'win32' ? '\x1B[2J\x1B[0f' : '\x1B[2J\x1B[3J\x1B[H');

const successCompilation = (url) => {
  clearConsole();
  console.log('');
  console.log(chalk.bgHex('#008c61')(' React Webpack Boilerplate '));
  console.log('');
  console.log(chalk.bold(' 🚀  App is available locally:') + ' ' + chalk.underline(url));
  console.log('');
};

const compiling = () => {
  clearConsole();
  console.log('');
  console.log(' 🧪  Compiling...');
  console.log('');
};

class TerminalSplashPlugin {
  constructor(props) {
    this.options = props.options;
  }
  apply(compiler) {
    compiler.hooks.done.tap('Hello World Plugin', () => {
      successCompilation(this.options.url);
    });
    compiler.hooks.invalid.tap('invalid', compiling);
  }
}

module.exports = TerminalSplashPlugin;
