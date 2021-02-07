/**
 * mksort.js - Implements SQL style multi-key asc/desc sorting of object arrays
 * Author: Fil Baumanis ( @unfail, @bitless )
 */

export const mksort = {};

(function() {
  // from James Coglan/Jeff Atwood's answers at
  // http://stackoverflow.com/questions/5223/length-of-javascript-object-ie-associative-array
  let obLen = function(obj) {
    let size = 0,
      key = 0;
    for (key in obj) {
      if (obj[key]) size++;
    }
    return size;
  };

  // avoiding using Object.keys because i guess did it have IE8 issues?
  // else var obIx = fucntion(obj, ix){ return Object.keys(obj)[ix]; } or
  // whatever
  let obIx = function(obj, ix) {
    let size = 0,
      key = 0;
    for (key in obj) {
      if (obj[key]) {
        if (size == ix) return key;
        size++;
      }
    }
    return false;
  };

  let keySort = function(a, b, d) {
    d = d !== null ? d : 1;
    // a = a.toLowerCase(); // this breaks numbers
    // b = b.toLowerCase();
    a = isNum(a) ? a * 1 : a.toLowerCase(); // restore numbers
    b = isNum(b) ? b * 1 : b.toLowerCase();
    if (a == b) return 0;
    return a > b ? 1 * d : -1 * d;
  };

  let isNum = function(v) {
    return !isNaN(parseFloat(v)) && isFinite(v);
  };

  /**
   * Sorts array of objects on keys as provided
   * @param objarr array of objects
   * @param keys object specifying keys, {KEY1:"asc", "KEY2:"desc", KEY3:"desc"}, also {KEYX:"skip"} for fun
   * @returns array of objects, sorted
   */
  mksort.sort = function(objarr, keys) {
    // not sure what we want to do if no keys provided.
    // use obIx0 on a member?
    keys = keys || {};

    let KL = obLen(keys);

    // as yet poorly defined -- maybe sort on
    if (!KL) return objarr.sort(keySort);

    for (let k in keys) {
      // asc unless desc or skip
      keys[k] =
        keys[k] == "desc" || keys[k] == -1
          ? -1
          : keys[k] == "skip" || keys[k] === 0
          ? 0
          : 1;
    }

    objarr.sort(function(a, b) {
      let sorted = 0,
        ix = 0;

      while (sorted === 0 && ix < KL) {
        let k = obIx(keys, ix);
        if (k) {
          let dir = keys[k];
          sorted = keySort(a[k], b[k], dir);
          ix++;
        }
      }
      return sorted;
    });
    return objarr;
  };
})();
