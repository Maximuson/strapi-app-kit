# Strapi cms + nextJs

## for develop

strapi start on port 1337
nextJs start on port 8080

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

## for production

install pm2 globaly

in root folder run `npm run prod`

check process with `pm2 list`
stop process width `pm2 stop [id]`
delete proces from list with `pm2 delete [id]`



## config erver.js example 

config for site with domain `strapi-app-kit.com`

```
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
```

## nginx proxy

```
      # Frontend 
		location / {
			proxy_pass http://strapi-app-kit.com:8080;
			proxy_http_version 1.1;
			proxy_set_header X-Forwarded-Host $host;
			proxy_set_header X-Forwarded-Server $host;
			proxy_set_header X-Real-IP $remote_addr;
			proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
			proxy_set_header X-Forwarded-Proto $scheme;
			proxy_set_header Host $http_host;
			proxy_set_header Upgrade $http_upgrade;
			proxy_set_header Connection "Upgrade";
			proxy_pass_request_headers on;
		}

      # Strapi API
		location /api/ {
			rewrite ^/api/?(.*)$ /$1 break;
			proxy_pass http://strapi-app-kit.com:1337;
			proxy_http_version 1.1;
			proxy_set_header X-Forwarded-Host $host;
			proxy_set_header X-Forwarded-Server $host;
			proxy_set_header X-Real-IP $remote_addr;
			proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
			proxy_set_header X-Forwarded-Proto $scheme;
			proxy_set_header Host $http_host;
			proxy_set_header Upgrade $http_upgrade;
			proxy_set_header Connection "Upgrade";
			proxy_pass_request_headers on;
		}

		# Strapi Dashboard
		location /dashboard {
			proxy_pass http://strapi-app-kit.com:1337/dashboard;
			proxy_http_version 1.1;
			proxy_set_header X-Forwarded-Host $host;
			proxy_set_header X-Forwarded-Server $host;
			proxy_set_header X-Real-IP $remote_addr;
			proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
			proxy_set_header X-Forwarded-Proto $scheme;
			proxy_set_header Host $http_host;
			proxy_set_header Upgrade $http_upgrade;
			proxy_set_header Connection "Upgrade";
			proxy_pass_request_headers on;
		}
```