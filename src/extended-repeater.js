const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  let res = "";
  options.separator === undefined ? (options.separator = "+") : "";
  options.additionSeparator === undefined
    ? (options.additionSeparator = "|")
    : "";
  options.repeatTimes === undefined ? (options.repeatTimes = 1) : "";
  options.additionRepeatTimes === undefined
    ? (options.additionRepeatTimes = 1)
    : "";
  options.addition === undefined ? (options.additionRepeatTimes = "") : "";
  
  for (let i = 1; i <= options.repeatTimes; i++) {
    res += str;
    for (let j = 1; j < options.additionRepeatTimes + 1; j++) {
      res += options.addition;
      if (j !== options.additionRepeatTimes) {
        res += options.additionSeparator;
      }
    }
    if (i !== options.repeatTimes) {
      res += options.separator;
    }
  }
  return res;
}

module.exports = {
  repeater,
};
