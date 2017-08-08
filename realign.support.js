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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWxpZ24uc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJmYWx6eSIsInJlcXVpcmUiLCJ0cnVseSIsIndpY2hldnIiLCJFTVBUWV9TUEFDRSIsIk5FV0xJTkUiLCJORVdMSU5FX1BBVFRFUk4iLCJTUEFDRV9QQVRURVJOIiwiU1BBQ0VfTElORV9QQVRURVJOIiwiVFJBSUxJTkdfU1BBQ0VfUEFUVEVSTiIsInJlYWxpZ24iLCJzdHJpbmciLCJFcnJvciIsInNwbGl0IiwibWFwIiwibGluZSIsInJlcGxhY2UiLCJmaWx0ZXIiLCJqb2luIiwic3BhY2UiLCJtYXRjaCIsInNwYWNlUGF0dGVybiIsIlJlZ0V4cCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0REEsSUFBTUEsUUFBUUMsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNQyxRQUFRRCxRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1FLFVBQVVGLFFBQVMsU0FBVCxDQUFoQjs7QUFFQSxJQUFNRyxjQUFjLEVBQXBCO0FBQ0EsSUFBTUMsVUFBVSxJQUFoQjtBQUNBLElBQU1DLGtCQUFrQixJQUF4QjtBQUNBLElBQU1DLGdCQUFnQixTQUF0QjtBQUNBLElBQU1DLHFCQUFxQixPQUEzQjtBQUNBLElBQU1DLHlCQUF5Qix1QkFBL0I7O0FBRUEsSUFBTUMsVUFBVSxTQUFTQSxPQUFULENBQWtCQyxNQUFsQixFQUEwQjtBQUN6Qzs7Ozs7Ozs7QUFRQSxLQUFJLE9BQU9BLE1BQVAsSUFBaUIsUUFBckIsRUFBK0I7QUFDOUIsUUFBTSxJQUFJQyxLQUFKLENBQVcsZ0JBQVgsQ0FBTjtBQUNBOztBQUVELEtBQUlaLE1BQU9XLE1BQVAsQ0FBSixFQUFxQjtBQUNwQixTQUFPQSxNQUFQO0FBQ0E7O0FBRURBLFVBQVNBO0FBQ1BFLE1BRE8sQ0FDQVAsZUFEQTtBQUVQUSxJQUZPLENBRUYsVUFBRUMsSUFBRixFQUFZLENBQUUsT0FBT0EsS0FBS0MsT0FBTCxDQUFjUixrQkFBZCxFQUFrQ0osV0FBbEMsQ0FBUCxDQUF3RCxDQUZwRTtBQUdQYSxPQUhPLENBR0NmLEtBSEQ7QUFJUGdCLEtBSk8sQ0FJRGIsT0FKQztBQUtQVyxRQUxPLENBS0VQLHNCQUxGLEVBSzBCTCxXQUwxQjtBQU1QUyxNQU5PLENBTUFQLGVBTkEsQ0FBVDs7QUFRQSxLQUFJYSxRQUFRaEIsUUFBU1EsT0FBUSxDQUFSLEVBQVlTLEtBQVosQ0FBbUJiLGFBQW5CLENBQVQsRUFBNkMsRUFBN0MsRUFBb0QsQ0FBcEQsS0FBMkRILFdBQXZFO0FBQ0EsS0FBSWlCLGVBQWUsSUFBSUMsTUFBSixPQUFpQkgsS0FBakIsQ0FBbkI7O0FBRUEsUUFBT1IsT0FBT0csR0FBUCxDQUFZLFVBQUVDLElBQUYsRUFBWSxDQUFFLE9BQU9BLEtBQUtDLE9BQUwsQ0FBY0ssWUFBZCxFQUE0QmpCLFdBQTVCLENBQVAsQ0FBa0QsQ0FBNUUsRUFBK0VjLElBQS9FLENBQXFGYixPQUFyRixDQUFQO0FBQ0EsQ0E3QkQ7O0FBK0JBa0IsT0FBT0MsT0FBUCxHQUFpQmQsT0FBakIiLCJmaWxlIjoicmVhbGlnbi5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKjtcclxuXHRAbW9kdWxlLWxpY2Vuc2U6XHJcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcclxuXHRcdEBtaXQtbGljZW5zZVxyXG5cclxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3JcclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxyXG5cclxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcclxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcclxuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcclxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuXHJcblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcclxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcblxyXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXHJcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxyXG5cdFx0U09GVFdBUkUuXHJcblx0QGVuZC1tb2R1bGUtbGljZW5zZVxyXG5cclxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XHJcblx0XHR7XHJcblx0XHRcdFwicGFja2FnZVwiOiBcInJlYWxpZ25cIixcclxuXHRcdFx0XCJwYXRoXCI6IFwicmVhbGlnbi9yZWFsaWduLmpzXCIsXHJcblx0XHRcdFwiZmlsZVwiOiBcInJlYWxpZ24uanNcIixcclxuXHRcdFx0XCJtb2R1bGVcIjogXCJyZWFsaWduXCIsXHJcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXHJcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXHJcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcclxuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcclxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcclxuXHRcdFx0XSxcclxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL3JlYWxpZ24uZ2l0XCIsXHJcblx0XHRcdFwidGVzdFwiOiBcInJlYWxpZ24tdGVzdC5qc1wiLFxyXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlXHJcblx0XHR9XHJcblx0QGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxyXG5cclxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XHJcblx0XHRSZS1hbGlnbiB3aGl0ZXNwYWNlcyBhbmQgdGFicyBpbiBhIG11bHRpLWxpbmUgc3RyaW5nLlxyXG5cclxuXHRcdFRoaXMgd2lsbCByZW1vdmUgbGluZXMgd2l0aG91dCBzaWduaWZpY2FudCBjaGFyYWN0ZXJzLlxyXG5cdEBlbmQtbW9kdWxlLWRvY3VtZW50YXRpb25cclxuXHJcblx0QGluY2x1ZGU6XHJcblx0XHR7XHJcblx0XHRcdFwiZmFsenlcIjogXCJmYWx6eVwiLFxyXG5cdFx0XHRcInRydWx5XCI6IFwidHJ1bHlcIixcclxuXHRcdFx0XCJ3aWNoZXZyXCI6IFwid2ljaGV2clwiXHJcblx0XHR9XHJcblx0QGVuZC1pbmNsdWRlXHJcbiovXHJcblxyXG5jb25zdCBmYWx6eSA9IHJlcXVpcmUoIFwiZmFsenlcIiApO1xyXG5jb25zdCB0cnVseSA9IHJlcXVpcmUoIFwidHJ1bHlcIiApO1xyXG5jb25zdCB3aWNoZXZyID0gcmVxdWlyZSggXCJ3aWNoZXZyXCIgKTtcclxuXHJcbmNvbnN0IEVNUFRZX1NQQUNFID0gXCJcIjtcclxuY29uc3QgTkVXTElORSA9IFwiXFxuXCI7XHJcbmNvbnN0IE5FV0xJTkVfUEFUVEVSTiA9IC9cXG4vO1xyXG5jb25zdCBTUEFDRV9QQVRURVJOID0gL1xcc3syLH0vZztcclxuY29uc3QgU1BBQ0VfTElORV9QQVRURVJOID0gL15cXHMrJC87XHJcbmNvbnN0IFRSQUlMSU5HX1NQQUNFX1BBVFRFUk4gPSAvXltcXG5cXHJdK3xbXFxuXFxyXFxzXSskL2dtO1xyXG5cclxuY29uc3QgcmVhbGlnbiA9IGZ1bmN0aW9uIHJlYWxpZ24oIHN0cmluZyApe1xyXG5cdC8qO1xyXG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcclxuXHRcdFx0e1xyXG5cdFx0XHRcdFwic3RyaW5nOnJlcXVpcmVkXCI6IFwic3RyaW5nXCJcclxuXHRcdFx0fVxyXG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cclxuXHQqL1xyXG5cclxuXHRpZiggdHlwZW9mIHN0cmluZyAhPSBcInN0cmluZ1wiICl7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBzdHJpbmdcIiApO1xyXG5cdH1cclxuXHJcblx0aWYoIGZhbHp5KCBzdHJpbmcgKSApe1xyXG5cdFx0cmV0dXJuIHN0cmluZztcclxuXHR9XHJcblxyXG5cdHN0cmluZyA9IHN0cmluZ1xyXG5cdFx0LnNwbGl0KCBORVdMSU5FX1BBVFRFUk4gKVxyXG5cdFx0Lm1hcCggKCBsaW5lICkgPT4geyByZXR1cm4gbGluZS5yZXBsYWNlKCBTUEFDRV9MSU5FX1BBVFRFUk4sIEVNUFRZX1NQQUNFICkgfSApXHJcblx0XHQuZmlsdGVyKCB0cnVseSApXHJcblx0XHQuam9pbiggTkVXTElORSApXHJcblx0XHQucmVwbGFjZSggVFJBSUxJTkdfU1BBQ0VfUEFUVEVSTiwgRU1QVFlfU1BBQ0UgKVxyXG5cdFx0LnNwbGl0KCBORVdMSU5FX1BBVFRFUk4gKTtcclxuXHJcblx0bGV0IHNwYWNlID0gd2ljaGV2ciggc3RyaW5nWyAwIF0ubWF0Y2goIFNQQUNFX1BBVFRFUk4gKSwgWyBdIClbIDAgXSB8fCBFTVBUWV9TUEFDRTtcclxuXHRsZXQgc3BhY2VQYXR0ZXJuID0gbmV3IFJlZ0V4cCggYF4keyBzcGFjZSB9YCApO1xyXG5cclxuXHRyZXR1cm4gc3RyaW5nLm1hcCggKCBsaW5lICkgPT4geyByZXR1cm4gbGluZS5yZXBsYWNlKCBzcGFjZVBhdHRlcm4sIEVNUFRZX1NQQUNFICkgfSApLmpvaW4oIE5FV0xJTkUgKTtcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcmVhbGlnbjtcclxuIl19
//# sourceMappingURL=realign.support.js.map
