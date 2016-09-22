# nodejs-ldap-auth

Simple Angular SPA with LDAP Auth integration

### Update app/config.js file with LDAP details

+ `ldapUrl` can be `ldaps://<ip-or-host>`
+ `ldapBaseDn` is the distinguished name `CN=Users,DC=example,DC=com`
+ `ldapSearchFilter` can be `uid`

### To run

+ `docker build -t nodejs-ldap-auth .`
+ `docker run -itd -p 8080:8080 nodejs-ldap-auth`
+ open the browser and hit [port 8080](http://localhost:8080)
