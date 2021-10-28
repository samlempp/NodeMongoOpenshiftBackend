# Deploy an ExpressJS/MongoDB Api on OpenShift
This repo contians starter code to deploy a nodeJS ExpressJS API on Openshit. If followed correctly
you will have CRUD endpoints on collections within MongoDB

## Pre reqs
1. Connected to campus VPN
2. Github Account
3. Sign up for [Carolina Cloud Apps](https://cloudapps.unc.edu/) | This step will only take a second

## Create a MongoDB database
1. Head to the Topology Tab under the Developer View
2. Select Database from the tiles that appear
3. Select MongoDB from the tiles that appear and hit instanitate template on the modal that opens
4. Accept all default values in the form, for the purpose of this demonstration you can use email and password settings as follows. Please make sure you remember or note these values as you will need them later ![Database Config](resources/dbConfig.png)
5. Hit create
6. Once the status of the pod shows up as active, head to the resrouce tab, and then hit view logs on the pod, followed by the terminal tab ![View Logs](resources/viewLogs.png)
7. In the terminal type the follow command
```
mongo -u "admin" -p "Admin123" admin
```
8. If connection is successful you should see this in the terminal
```
MongoDB shell version v3.6.3
connecting to: mongodb://127.0.0.1:27017/admin
MongoDB server version: 3.6.3
Welcome to the MongoDB shell.
For interactive help, type "help".
For more comprehensive documentation, see
        http://docs.mongodb.org/
Questions? Try the support group
        http://groups.google.com/group/mongodb-user
```
9. Go back to the topology and click the mongodb pod, from there hit the mongodb service
![Database Service](resources/service.png)
10. Note the IP of the cluster, and update the IP address of the database connection in this repo under config/database.config.js
![IP Address](resources/ip.png)