# Strapi cms + nextJs

for develop

strapi start on port 1337
nextJs start on port 3000

1. Delete linked repository `git remote rm origin`
2. Create DB & [Configure DB](https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/configurations.html#database)

3. run `cd frontend && npm i && cd ../backend && npm i && cd ../`
4. run `npm run develop`
5. Create user in [admin app](http://localhost:1337/)
6. Add permisions to APP-NAME (select find
   `http://localhost:1337/admin/settings/users-permissions/roles/2`
7. Save and publish App name
   `http://localhost:1337/admin/plugins/content-manager/singleType/application::app-name.app-name`
8. [Check frontend](http://localhost:3000/)
9. Develop your app
