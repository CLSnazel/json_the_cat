const request = require('request');

let breedQuery = process.argv[2];
request(`https://api.thecatapi.com/v1/breeds/search?q=${breedQuery}`, (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    let breedJSON = JSON.parse(body);
    // console.log(typeof breedJSON);
    // console.log(Array.isArray(breedJSON));
    if (breedJSON.length === 0) {
      console.log(`${breedQuery} returned no results.`);
    } else {
      console.log(breedJSON);
    }
  }
});