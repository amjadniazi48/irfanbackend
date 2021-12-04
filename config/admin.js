module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '1aca2905d8b858e4eea1db0c8f093b65'),
  },
});
