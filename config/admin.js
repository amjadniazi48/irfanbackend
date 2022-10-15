module.exports = ({ env }) => ({
  apiToken:{
    salt: env('API_TOKEN_SALT','86295706766ad1de48e48666130067c5')
  },
  auth: {
    secret: env('ADMIN_JWT_SECRET', '1aca2905d8b858e4eea1db0c8f093b65'),
  },
});
