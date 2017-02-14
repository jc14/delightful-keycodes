const dk = require('./index.js');
const chai = require('chai');
const should = chai.should();
const expect = chai.expect;
const assert = chai.assert;

describe("Delightful Keycodes", () => {
  it("Should be able to convert keyCode numbers using String.fromCharCode", () => {
    expect(dk(68)).to.equal("D");
    expect(dk(46)).to.equal(".");
    expect(dk(119)).to.equal("w");
  });
  it("Should be able to convert special keyCodes that String.fromCharCode doesn't cover", () => {
    expect(dk(8)).to.equal('backspace');
    expect(dk(9)).to.equal('tab');
    expect(dk(13)).to.equal('enter');
    expect(dk(27)).to.equal('escape');
    expect(dk(32)).to.equal('space');
  });
  it("Should be able to take a keyPress event and convert to the correct key", () => {
    let temp = {
      keyCode: 99
    }
    expect(dk(temp)).to.equal('c');
  });
  it("Should be able to detect if the event has a key property", () => {
    let temp = {
      key: 'f',
      keyCode: 99
    }
    expect(dk(temp)).to.equal('f');
  });
})
