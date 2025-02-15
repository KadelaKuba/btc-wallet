## BTC wallet balance

Basic Node.js app for checking actual BTC balance on hardware wallet. 
Total amount of all addresses on wallet (derived from public key - xpub).

### Tech stack
- Typescript + React + Vite
- Auth0

### Local setup

1. Start containers by running:
```
make run
```
2. Build app
```
make npm-run-dev
```
3. Open Application in Browser: [http://localhost:8008](http://localhost:8008)

### Development

#### Makefile
For effective work with host system. The config and more info in `Makefile` in project root directory.

### Deployment
Deployment is performed using the [Netlify](https://www.netlify.com/) platform.

### TODOs
- [ ] External api cors error
