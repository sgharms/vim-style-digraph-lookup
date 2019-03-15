var expect = require('chai').expect;
const { vimStyleDigraphLookup } = require('../index.js')

describe('vimStyleDigraphLookup', function () {
  it('exists', () => {
    expect(vimStyleDigraphLookup).to.not.be.undefined;
  })

  describe("produces the correct characters for a sample of digraphs", () => {
    it("correctly maps [a, \"] to ä", () => {
      expect(vimStyleDigraphLookup("a","\"")).to.equal("ä")
    })

    it("correctly maps [a, -] to ā", () => {
      expect(vimStyleDigraphLookup("a","-")).to.equal("ā")
    })

    it("correctly maps [A, -] to Ā", () => {
      expect(vimStyleDigraphLookup("A","-")).to.equal("Ā")
    })

    it("correctly maps [-, :] to ÷", () => {
      expect(vimStyleDigraphLookup("-",":")).to.equal("÷")
    })

    it("correctly maps [A, E] to Æ", () => {
      expect(vimStyleDigraphLookup("A","E")).to.equal("Æ")
    })

  })
});

