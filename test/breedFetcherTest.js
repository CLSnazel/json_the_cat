const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      assert.equal(err, null);
      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors. ";
      assert.equal(expectedDesc, desc);
      done();
    });
  });
  it('should return a polite error message when an invalid breed is queried', (done) => {
    fetchBreedDescription('Nyan', (err, desc) => {
      assert.equal(err, 'Error: Nyan returned no results.');
      assert.equal(desc, null);
      done();
    });
  });
});