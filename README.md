You can run the project by following command </br>```docker-compose up --build```

The server project runs on port ```3001``` and client project runs on ```3000``` port

Then you can visit http://localhost:3000 </br>
Also port ```3050``` is available to visit by nginx.

Assuming a scenario where users' data is refreshed every 30 minutes, so there is a 30 minutes time to live ```(ttl)``` to cache users' data, so after first visit to the project, users' data is stored in redis and to avoid unnecessary api call .