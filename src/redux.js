const rd = require("redux");
const axios = require("axios");

const store = rd.createStore();

//const iexEndpoint = "https://api.iextrading.com/1.0/stock/amzn/chart/1d";

const iexEndpoint = "https://api.iextrading.com/1.0/stock/amzn/price";

const appData = {
  amazonStockData: "",
  weatherData: ""
};

const getStockData = () => {
  axios
    .get(iexEndpoint)
    .then(function(response) {
      console.log("just got stock data");
      //console.log(response);
      console.log(response.data);
    })
    .catch(function(error) {
      console.log("ERROR getting stock data");
      console.log(error);
    });
};

// set up polling data call
setInterval(function() {
  console.log("checking for new data...");
  getStockData();
}, 20000);

// immediately get some data as soon as node.js finishes its event loop
setImmediate(function() {
  console.log("just started, now checking for new data");
  getStockData();
});

const here = () => {
  console.log("here");
};

module.exports.here = here;
