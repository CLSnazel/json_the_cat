const request = require('request');


const fetchBreedDescription = function(breedQuery, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedQuery}`, (error, response, body) => {
    if (error) {
      callback(error, null);
    } else {
      let breedJSON = JSON.parse(body);
      // console.log(typeof breedJSON);
      // console.log(Array.isArray(breedJSON));
      if (breedJSON.length === 0) {
        //console.log(`${breedQuery} returned no results.`);
        callback(`Error: ${breedQuery} returned no results.`, null);
      } else {
        //console.log(breedJSON);
        callback(null, breedJSON[0].description);
      }
    }
  });
};

module.exports = {fetchBreedDescription};
