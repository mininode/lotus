//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

console.log("before null byte");

// cannot print this string as part of the test because of Microsoft/ChakraCore#4410
let str = "null byte between quotes ' '";

console.log("after null byte");
