/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict
 * @format
 * @oncall react_native
 */

// Compatibility module for tools which don't support the "exports" field:
// - Flow (type exports)
// - Metro (runtime exports)

/*::
export * from './src/path-support.flow';
*/

try {
  // $FlowIgnore[cannot-resolve-module]
  // $FlowIgnore[invalid-export]
  // $FlowIgnore[module-type-conflict]
  module.exports = require('./dist/path-support.flow');
} catch (e) {
  // $FlowIgnore[invalid-export]
  // $FlowIgnore[module-type-conflict]
  module.exports = require('./src/path-support');
  // POINTER: This can't be resolved by Metro in a distributed package (all
  // `require()`s are processed).
}
