const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    if (String(value)) {
      this.arr.push(`( ` + String(value) + ` )`);
      return this;
    }
    this.arr.push(`()`);
    return this;
  },
  removeLink(position) {
    if (
      position > this.arr.length ||
      position <= 0 ||
      typeof position !== "number"
    ) {
      this.arr = [];
      throw new Error(`You can't remove incorrect link!`);
    }
    this.arr.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let chain = this.arr.join("~~");
    this.arr = [];
    return chain;
  },
};

module.exports = {
  chainMaker,
};
