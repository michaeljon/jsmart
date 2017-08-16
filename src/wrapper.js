/*!
 * jSmart JavaScript template engine (v@VERSION)
 * https://github.com/umakantp/jsmart
 *
 * Copyright 2011-2017, Umakant Patil <me at umakantpatil dot com>
 *                      Max Miroshnikov <miroshnikov at gmail dot com>
 * https://opensource.org/licenses/MIT
 *
 * Date: @DATE
 */
(function(factory) {
  "use strict";

  if (typeof module === "object" && module && typeof module.exports === "object") {
    // Node.js like environment. Export jSmart
    module.exports = factory();
  } else {
    if (window && window.document) {
      // Assign to browser window if window is present.
      window.jSmart = factory();
    }

    if (typeof define === "function" && define.amd) {
        // Require js is present? Lets define module.
        define("jSmart", [], factory);
    }
  }
// Pass this if window is not defined yet
})(function() {
  "use strict";

  // @CODE
  // tasks/build.js inserts compiled jQuery here

  return jSmart;
});