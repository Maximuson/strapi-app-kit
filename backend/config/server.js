module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: 'http://strapi-app-kit.com/api',
  admin: {
    url: 'http://strapi-app-kit.com/dashboard',
    auth: {
      secret: "hi"
    }
  },
});
