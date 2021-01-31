# keyring

A modest app to keep track of your digital [keys](https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange).

Why do you want keys? Well keys limit [privilege](https://en.wikipedia.org/wiki/Principle_of_least_privilege). But many keys are just really large random numbers. How do we make sense of them all? Use this app.

What's an example of a key? You can use `ssh-keygen` to create an ed25519 key. That key can then identify you whenever you use ssh to connect to a server. That same key can also identify you to other decentralized systems.

## User Stories

* [x] I can see a list of my keys, so I can find the one I want
  * [x] I can see a name for each key.
* [ ] I can add a new key, so I can keep it safe and come find it later.
  * [ ] I can add a name to the key.
  * [ ] The key has an ed25519 keyPair persisted with it
* [ ] I can publish my public key, so others know I exist
  * [ ] I can POST this as a well-defined message to an arbitrary HTTP endpoint

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
