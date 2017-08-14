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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWxpZ24uc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJmYWx6eSIsInJlcXVpcmUiLCJ0cnVseSIsIndpY2hldnIiLCJFTVBUWV9TUEFDRSIsIk5FV0xJTkUiLCJORVdMSU5FX1BBVFRFUk4iLCJTUEFDRV9QQVRURVJOIiwiU1BBQ0VfTElORV9QQVRURVJOIiwiVFJBSUxJTkdfU1BBQ0VfUEFUVEVSTiIsInJlYWxpZ24iLCJzdHJpbmciLCJFcnJvciIsInNwbGl0IiwibWFwIiwibGluZSIsInJlcGxhY2UiLCJmaWx0ZXIiLCJqb2luIiwic3BhY2UiLCJtYXRjaCIsInNwYWNlUGF0dGVybiIsIlJlZ0V4cCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0REEsSUFBTUEsUUFBUUMsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNQyxRQUFRRCxRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1FLFVBQVVGLFFBQVMsU0FBVCxDQUFoQjs7QUFFQSxJQUFNRyxjQUFjLEVBQXBCO0FBQ0EsSUFBTUMsVUFBVSxJQUFoQjtBQUNBLElBQU1DLGtCQUFrQixJQUF4QjtBQUNBLElBQU1DLGdCQUFnQixTQUF0QjtBQUNBLElBQU1DLHFCQUFxQixPQUEzQjtBQUNBLElBQU1DLHlCQUF5Qix1QkFBL0I7O0FBRUEsSUFBTUMsVUFBVSxTQUFTQSxPQUFULENBQWtCQyxNQUFsQixFQUEwQjtBQUN6Qzs7Ozs7Ozs7QUFRQSxLQUFJLE9BQU9BLE1BQVAsSUFBaUIsUUFBckIsRUFBK0I7QUFDOUIsUUFBTSxJQUFJQyxLQUFKLENBQVcsZ0JBQVgsQ0FBTjtBQUNBOztBQUVELEtBQUlaLE1BQU9XLE1BQVAsQ0FBSixFQUFxQjtBQUNwQixTQUFPQSxNQUFQO0FBQ0E7O0FBRURBLFVBQVNBO0FBQ1BFLE1BRE8sQ0FDQVAsZUFEQTtBQUVQUSxJQUZPLENBRUYsVUFBRUMsSUFBRixFQUFZLENBQUUsT0FBT0EsS0FBS0MsT0FBTCxDQUFjUixrQkFBZCxFQUFrQ0osV0FBbEMsQ0FBUCxDQUF3RCxDQUZwRTtBQUdQYSxPQUhPLENBR0NmLEtBSEQ7QUFJUGdCLEtBSk8sQ0FJRGIsT0FKQztBQUtQVyxRQUxPLENBS0VQLHNCQUxGLEVBSzBCTCxXQUwxQjtBQU1QUyxNQU5PLENBTUFQLGVBTkEsQ0FBVDs7QUFRQSxLQUFJYSxRQUFRaEIsUUFBU1EsT0FBUSxDQUFSLEVBQVlTLEtBQVosQ0FBbUJiLGFBQW5CLENBQVQsRUFBNkMsRUFBN0MsRUFBb0QsQ0FBcEQsS0FBMkRILFdBQXZFO0FBQ0EsS0FBSWlCLGVBQWUsSUFBSUMsTUFBSixPQUFpQkgsS0FBakIsQ0FBbkI7O0FBRUEsUUFBT1IsT0FBT0csR0FBUCxDQUFZLFVBQUVDLElBQUYsRUFBWSxDQUFFLE9BQU9BLEtBQUtDLE9BQUwsQ0FBY0ssWUFBZCxFQUE0QmpCLFdBQTVCLENBQVAsQ0FBa0QsQ0FBNUUsRUFBK0VjLElBQS9FLENBQXFGYixPQUFyRixDQUFQO0FBQ0EsQ0E3QkQ7O0FBK0JBa0IsT0FBT0MsT0FBUCxHQUFpQmQsT0FBakIiLCJmaWxlIjoicmVhbGlnbi5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAbW9kdWxlLWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC1tb2R1bGUtbGljZW5zZVxuXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJyZWFsaWduXCIsXG5cdFx0XHRcInBhdGhcIjogXCJyZWFsaWduL3JlYWxpZ24uanNcIixcblx0XHRcdFwiZmlsZVwiOiBcInJlYWxpZ24uanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwicmVhbGlnblwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvcmVhbGlnbi5naXRcIixcblx0XHRcdFwidGVzdFwiOiBcInJlYWxpZ24tdGVzdC5qc1wiLFxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZVxuXHRcdH1cblx0QGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxuXG5cdEBtb2R1bGUtZG9jdW1lbnRhdGlvbjpcblx0XHRSZS1hbGlnbiB3aGl0ZXNwYWNlcyBhbmQgdGFicyBpbiBhIG11bHRpLWxpbmUgc3RyaW5nLlxuXG5cdFx0VGhpcyB3aWxsIHJlbW92ZSBsaW5lcyB3aXRob3V0IHNpZ25pZmljYW50IGNoYXJhY3RlcnMuXG5cdEBlbmQtbW9kdWxlLWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImZhbHp5XCI6IFwiZmFsenlcIixcblx0XHRcdFwidHJ1bHlcIjogXCJ0cnVseVwiLFxuXHRcdFx0XCJ3aWNoZXZyXCI6IFwid2ljaGV2clwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGZhbHp5ID0gcmVxdWlyZSggXCJmYWx6eVwiICk7XG5jb25zdCB0cnVseSA9IHJlcXVpcmUoIFwidHJ1bHlcIiApO1xuY29uc3Qgd2ljaGV2ciA9IHJlcXVpcmUoIFwid2ljaGV2clwiICk7XG5cbmNvbnN0IEVNUFRZX1NQQUNFID0gXCJcIjtcbmNvbnN0IE5FV0xJTkUgPSBcIlxcblwiO1xuY29uc3QgTkVXTElORV9QQVRURVJOID0gL1xcbi87XG5jb25zdCBTUEFDRV9QQVRURVJOID0gL1xcc3syLH0vZztcbmNvbnN0IFNQQUNFX0xJTkVfUEFUVEVSTiA9IC9eXFxzKyQvO1xuY29uc3QgVFJBSUxJTkdfU1BBQ0VfUEFUVEVSTiA9IC9eW1xcblxccl0rfFtcXG5cXHJcXHNdKyQvZ207XG5cbmNvbnN0IHJlYWxpZ24gPSBmdW5jdGlvbiByZWFsaWduKCBzdHJpbmcgKXtcblx0Lyo7XG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdHtcblx0XHRcdFx0XCJzdHJpbmc6cmVxdWlyZWRcIjogXCJzdHJpbmdcIlxuXHRcdFx0fVxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdCovXG5cblx0aWYoIHR5cGVvZiBzdHJpbmcgIT0gXCJzdHJpbmdcIiApe1xuXHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIHN0cmluZ1wiICk7XG5cdH1cblxuXHRpZiggZmFsenkoIHN0cmluZyApICl7XG5cdFx0cmV0dXJuIHN0cmluZztcblx0fVxuXG5cdHN0cmluZyA9IHN0cmluZ1xuXHRcdC5zcGxpdCggTkVXTElORV9QQVRURVJOIClcblx0XHQubWFwKCAoIGxpbmUgKSA9PiB7IHJldHVybiBsaW5lLnJlcGxhY2UoIFNQQUNFX0xJTkVfUEFUVEVSTiwgRU1QVFlfU1BBQ0UgKSB9IClcblx0XHQuZmlsdGVyKCB0cnVseSApXG5cdFx0LmpvaW4oIE5FV0xJTkUgKVxuXHRcdC5yZXBsYWNlKCBUUkFJTElOR19TUEFDRV9QQVRURVJOLCBFTVBUWV9TUEFDRSApXG5cdFx0LnNwbGl0KCBORVdMSU5FX1BBVFRFUk4gKTtcblxuXHRsZXQgc3BhY2UgPSB3aWNoZXZyKCBzdHJpbmdbIDAgXS5tYXRjaCggU1BBQ0VfUEFUVEVSTiApLCBbIF0gKVsgMCBdIHx8IEVNUFRZX1NQQUNFO1xuXHRsZXQgc3BhY2VQYXR0ZXJuID0gbmV3IFJlZ0V4cCggYF4keyBzcGFjZSB9YCApO1xuXG5cdHJldHVybiBzdHJpbmcubWFwKCAoIGxpbmUgKSA9PiB7IHJldHVybiBsaW5lLnJlcGxhY2UoIHNwYWNlUGF0dGVybiwgRU1QVFlfU1BBQ0UgKSB9ICkuam9pbiggTkVXTElORSApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSByZWFsaWduO1xuIl19
//# sourceMappingURL=realign.support.js.map
