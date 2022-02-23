module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3d2d8d4b8779605c7e7002f8ea861373'),
  },
});
