export default {
  jwt: {
    secret: process.env.APP_SECRET || 'fcea68cbdb387a28d7adf9219bad378d',
    expiresIn: '1d',
  },
};
