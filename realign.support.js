"use strict";

/*;
              	@module-license:
              		The MIT License (MIT)
              		@mit-license
              
              		Copyright (@c) 2017 Richeve Siodina Bebedor
              		@email: richeve.bebedor@gmail.com
              
              		Permission is hereby granted, free of charge, to any person obtaining a copy
              		of this software and associated documentation files (the "Software"), to deal
              		in the Software without restriction, including without limitation the rights
              		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
              		copies of the Software, and to permit persons to whom the Software is
              		furnished to do so, subject to the following conditions:
              
              		The above copyright notice and this permission notice shall be included in all
              		copies or substantial portions of the Software.
              
              		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
              		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
              		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
              		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
              		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
              		SOFTWARE.
              	@end-module-license
              
              	@module-configuration:
              		{
              			"package": "realign",
              			"path": "realign/realign.js",
              			"file": "realign.js",
              			"module": "realign",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/realign.git",
              			"test": "realign-test.js",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Re-align whitespaces and tabs in a multi-line string.
              
              		This will remove lines without significant characters.
              	@end-module-documentation
              
              	@include:
              		{
              			"falzy": "falzy",
              			"truly": "truly",
              			"wichevr": "wichevr"
              		}
              	@end-include
              */

var falzy = require("falzy");
var truly = require("truly");
var wichevr = require("wichevr");

var EMPTY_SPACE = "";
var NEWLINE = "\n";
var NEWLINE_PATTERN = /\n/;
var SPACE_PATTERN = /\s{2,}/g;
var SPACE_LINE_PATTERN = /^\s+$/;
var TRAILING_SPACE_PATTERN = /^[\n\r]+|[\n\r\s]+$/gm;

var realign = function realign(string) {
	/*;
                                        	@meta-configuration:
                                        		{
                                        			"string:required": "string"
                                        		}
                                        	@end-meta-configuration
                                        */

	if (typeof string != "string") {
		throw new Error("invalid string");
	}

	if (falzy(string)) {
		return string;
	}

	string = string.
	split(NEWLINE_PATTERN).
	map(function (line) {return line.replace(SPACE_LINE_PATTERN, EMPTY_SPACE);}).
	filter(truly).
	join(NEWLINE).
	replace(TRAILING_SPACE_PATTERN, EMPTY_SPACE).
	split(NEWLINE_PATTERN);

	var space = wichevr(string[0].match(SPACE_PATTERN), [])[0] || EMPTY_SPACE;
	var spacePattern = new RegExp("^" + space);

	return string.map(function (line) {return line.replace(spacePattern, EMPTY_SPACE);}).join(NEWLINE);
};

module.exports = realign;

//# sourceMappingURL=realign.support.js.map