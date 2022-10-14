const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let acc = '';
  let res = email.split('').reverse();
  for (let i = 0; i <= res.length; i++) {
    acc += res[i]
    if (res[i + 1] === '@') {break;}
  }
  return acc.split('').reverse().join('');
}

module.exports = {
  getEmailDomain,
};
