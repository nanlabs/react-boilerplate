module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.(ts|tsx|js|jsx)?$': 'ts-jest',
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/config/jest/fileMock.js',
    '\\.(css|sass|less)$': '<rootDir>/config/jest/styleMock.js',
    'app-assets(.*)$': '<rootDir>/static/$1',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(ts|tsx|js|jsx)?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  moduleDirectories: ['node_modules', 'src'],
  testEnvironment: 'jsdom',
  globals: {
    'ts-jest': {
      diagnostics: {
        warnOnly: true,
      },
    },
  },
};
