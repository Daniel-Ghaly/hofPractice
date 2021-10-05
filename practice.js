// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

/*
 *
 *  _.each
 *
 */

// use _.each to create a copy of the given array.
var moreFruits = function(fruits) {
  var results = [];

  _.each(fruits, function(fruit, index, collection) {
    results.push(fruit);
  });

  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five.
var multiplesOfFive = function(numbers) {
  var count = 0;
  _.each(numbers, function(number) {
    if (number % 5 === 0) {
      count++;
    }

  });
  return count;
};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.
var onlyOneFruit = function(fruits, targetFruit) {
  return _.filter(fruits, function(fruit, i, fruits) {
    return fruit === targetFruit;
  });
};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
var startsWith = function(fruits, letter) {
  return _.filter(fruits, function(fruit, i) {
    return fruit[0] === letter;
  });
};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function(desserts) {
  return _.filter(desserts, function (dessert, i, desserts) {
    return dessert.type === 'cookie';
  });
};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
var sumTotal = function(products) {
  return _.reduce(products, function(total, product) {
    return total + product.price;
  }, 0);
};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }

var dessertCategories = function(desserts) {
  return _.reduce(desserts, function(accumulator, dessert) {
    if ( accumulator[dessert.type] === undefined) {
      accumulator[dessert.type] = 1;
      return accumulator;
    } else {
      accumulator[dessert.type]++;
      return accumulator;
    }
    console.log(accumulator);
  }, {});
};




/* var dessertCategories = function(desserts) {
  var obj = {}
  for( var i = 0 ; i < desserts.length; i++) {
    var dessert = desserts[i];
    if(obj[dessert.type]===undefined) {
      obj[dessert.type] = _.reduce(desserts, function (count, item) {
        if(item.type = dessert.type) {
          return count + 1;
        }
      }, 0)
    }
  }
  return obj;

};
*/
// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
var ninetiesKid = function(movies) {
  return _.reduce(movies, function(accumulator, movie) {
    if (movie.releaseYear >= 1990 && movie.releaseYear <= 2000 ) {
      accumulator.push(movie.title);
      return accumulator;
    } else {
      return accumulator;
    }
  }, []);

};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function(movies, timeLimit) {
  return _.reduce(movies, function(movieExists, movie) {
    if (movieExists) {
      return true;
    } else {
      return movie.runtime < timeLimit;
    }
  }, false);

};

/*
 *
 *  _.map
 *
 */

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to two places.
/* example output:
  var salePrices = applyCoupon(grocery, 0.20);
  [
    {
      id: 1,
      product: 'Pork - Loin, Boneless',
      price: 8.63
      salePrice: 6
    }
  ];
*/
var applyCoupon = function(grocery, coupon) {
  return _.map(grocery, function(item) {
    item.salePrice = Number((item.price*(1-coupon)).toFixed(2));
    console.log(item);
    return item;
  });
};

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
var upperCaseFruits = function(fruits) {
  return _.map(fruits, function(fruit) {
    return fruit.toUpperCase();
  });

};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
var glutenFree = function(desserts) {

  var newArr = _.map(desserts, function(dessert) {
    if (dessert.ingredients.includes('flour')) {
      dessert.glutenFree = true;
      return dessert;
    }
    dessert.glutenFree = false;
    return dessert;

  });
  return newArr;
};