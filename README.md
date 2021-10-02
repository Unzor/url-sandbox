# url-sandbox
Run scripts in an URL, based on JSDOM.

# Usage
First, install the package:
```
npm install url-sandbox
```
Then, use it like this:
```javascript
var sandbox = require('url-sandbox');
sandbox.runCode('https://example.com', `
  console.log(document.body.innerHTML)
 `);
```
This will log the innerHTML of the website. In JSDOM, it would usually only change the location but not the HTML. In url-sandbox, it changes both the location and HTML.
You can also use files like this:
```javascript
var sandbox = require('url-sandbox');
sandbox.useFile('https://example.com', './demo.js');
```

demo.js: 
```javascript
  console.log(document.body.innerHTML)
```
