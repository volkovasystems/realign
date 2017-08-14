"use strict";

/*;
	@test-license:
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
	@end-test-license

	@test-configuration:
		{
			"package": "realign",
			"path": "realign/test.module.js",
			"file": "test.module.js",
			"module": "test",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/realign.git"
		}
	@end-test-configuration

	@test-documentation:

	@end-test-documentation

	@include:
		{
			"assert": "should",
			"realign": "realign"
		}
	@end-include
*/

const assert = require( "should" );

//: @server:
const realign = require( "./realign.js" );
//: @end-server

//: @client:
const realign = require( "./realign.support.js" );
//: @end-client

//: @bridge:
const path = require( "path" );
//: @end-bridge


//: @server:

describe( "realign", ( ) => {

	describe( "`realign with multiline string`", ( ) => {

		it( "should re-align whitespaces and tabs in a multi-line string", ( ) => {

			let lipsum = realign(
				`Lorem Ipsum is simply dummy text of the printing
				and typesetting industry. Lorem Ipsum has been
				the industry's standard dummy text ever since
				the 1500s, when an unknown printer took a
				galley of type and scrambled it to make a type
				specimen book. It has survived not only five
				centuries, but also the leap into electronic
				typesetting, remaining essentially unchanged`
			);

			assert.ok( lipsum );

		} );

	} );

} );

//: @end-server


//: @client:

describe( "realign", ( ) => {

	describe( "realign", ( ) => {

		describe( "`realign with multiline string`", ( ) => {

			it( "should re-align whitespaces and tabs in a multi-line string", ( ) => {

				let lipsum = realign(
					`Lorem Ipsum is simply dummy text of the printing
					and typesetting industry. Lorem Ipsum has been
					the industry's standard dummy text ever since
					the 1500s, when an unknown printer took a
					galley of type and scrambled it to make a type
					specimen book. It has survived not only five
					centuries, but also the leap into electronic
					typesetting, remaining essentially unchanged`
				);

				assert.ok( lipsum );

			} );

		} );

	} );

} );

//: @end-client


//: @bridge:

describe( "realign", ( ) => {

} );

//: @end-bridge
