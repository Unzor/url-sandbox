var fs=require('fs');
var { JSDOM } = require('./jsdom.js');
const got = require('got');

exports.useFile=async function(mainUrl, file){
	try {
		const response = await got(mainUrl);
const { window } = new JSDOM(response.body, { runScripts: "dangerously",  url: mainUrl,
  referrer: mainUrl,
  contentType: "text/html" });

fs.readFile(file, 'utf8', function(err, data){if (err) throw err; window.eval(data);});
		//=> '<!doctype html> ...'
	} catch (error) {
		console.log(error.response.body);
		//=> 'Internal server error ...'
	}
}

exports.runCode=async function(mainUrl, code){
	try {
		const response = await got(mainUrl);
const { window } = new JSDOM(response.body, { runScripts: "dangerously",  url: mainUrl,
  referrer: mainUrl,
  contentType: "text/html" });

window.eval(code.toString().substring(0, code.toString().length - 1).split('function(){').pop());
		//=> '<!doctype html> ...'
	} catch (error) {
		console.log(error.response.body);
		//=> 'Internal server error ...'
	}
}
