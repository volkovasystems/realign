"use strict";

/*;
	@module-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2016 Richeve Siodina Bebedor
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
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>"
			],
			"eMail": "richeve.bebedor@gmail.com",
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
			"harden": "harden",
			"protype": "protype",
			"truly": "truly"
		}
	@end-include
*/

var falzy = require("falzy");
var harden = require("harden");
var protype = require("protype");
var truly = require("truly");

var realign = function realign(string) {
	/*;
 	@meta-configuration:
 		{
 			"string:required": "string"
 		}
 	@end-meta-configuration
 */

	if (!protype(string, STRING)) {
		throw new Error("invalid string");
	}

	if (falzy(string)) {
		return string;
	}

	string = string.split(realign.NEWLINE_PATTERN).map(function (line) {
		return line.replace(realign.SPACE_LINE_PATTERN, "");
	}).filter(truly).join("\n").replace(realign.TRAILING_SPACE_PATTERN, "").split(realign.NEWLINE_PATTERN);

	var space = (string[0].match(realign.SPACE_PATTERN) || [])[0] || "";
	var spacePattern = new RegExp("^" + space);

	return string.map(function (line) {
		return line.replace(spacePattern, "");
	}).join("\n");
};

harden.bind(realign)("NEWLINE_PATTERN", /\n/).harden("SPACE_PATTERN", /\s{2,}/g).harden("SPACE_LINE_PATTERN", /^\s+$/).harden("TRAILING_SPACE_PATTERN", /^[\n\r]+|[\n\r\s]+$/gm);

module.exports = realign;
