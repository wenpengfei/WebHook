# WebHook
Node.js app for processing Webhooks
# Nginx Config
```
server {
        listen 80;
        server_name your-domain.com;
        location /build {
                proxy_pass http://localhost:7777/build/;
        }
}
```
then your WebHook url is http://your-domain.com/build
