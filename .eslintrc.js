module.exports = {
  extends: [
    '@skypilot/eslint-config-typescript',
  ],
  overrides: [
    {
      files: ['jest.setup.js'],
      env: {
        jest: true,
      },
    },
  ],
};
