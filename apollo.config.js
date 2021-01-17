module.exports = {
  client: {
    service: {
      name: 'brokerage-tms',
      url: 'https://api.github.com/graphql',
      headers: {
        authorization: 'token 1fcaf79bd643303d028fe800f78e99707be1dd24',
      },
    },
    includes: ['./src/gql/**/*.ts'],
    excludes: ['**/__tests__/**'],
  },
};
