# credential-management-api

> Demostrate to show what happen with Chrome Credential Management API

# Getting Started

First of all, You must have to set up credential information on Googl Cloud Platform that allow you can get client_id. This demo requires `client_id` you can get in Credentials in Dash board. Take a look about [codelab guide](https://codelabs.developers.google.com/codelabs/credential-management-api/#1)

After get a `client_id` from dashboard or `client_secrets.json`, you need to crete a file named `client-secrets.js` at root of this project and set `client_id` value to the variable in global

```
window.clientSecret = {
	'client_id': 'XXXXXXX.apps.googleusercontent.com'
}
```

Congrats!, almost done. You can get an access to demo page via commands below

```sh
npm install
npm start
```

# References

- [Latest Updates to the Credential Management API  |  Web  |  Google Developers](https://goo.gl/AuMLtr)
- [Integrating Google Sign-In into your web app  |  Google Sign-In for Websites  |  Google Developers](https://goo.gl/ueCQIr)
- [GoogleChrome/credential-management-sample: Credential Management Sample](https://goo.gl/c4Pn22)
	- [Credential Management API Demo](https://goo.gl/iqYLRm)
	- [Enabling auto sign-in with Credential Management API](https://goo.gl/9wRRmY)
- [Streamlining the Sign-in Flow Using Credential Management API  |  Web  |  Google Developers](https://goo.gl/w7cF8a)
- [Enabling auto sign-in with Credential Management API](https://goo.gl/9wRRmY)

# License

MIT @ [CodeBusking](http://codebusking.come)
