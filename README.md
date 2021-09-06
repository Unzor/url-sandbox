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
sandbox.runCode('https://example.com', function(){
  console.log(document.body.innerHTML)
});
```
This will log the innerHTML of the website. In JSDOM, it would usually only change the location but not the HTML. In url-sandbox, it changes both the location and HTML.
