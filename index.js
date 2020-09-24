const { fetchBreedDescription } = require('./breedFetcher');

let breedQuery = process.argv[2];

fetchBreedDescription(breedQuery, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});