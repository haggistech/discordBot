const axios = require('axios');

function getBrown() {
    return axios.get("https://api.challonge.com/v1/tournaments/73ldr679/participants.json?api_key=3TKGyRJOejDpPiINIgfpJfpWlFZRFXwPb6vceiRc").then(response => response.data)
  }
  
  function getBlue() {
    return axios.get("https://api.challonge.com/v1/tournaments/4eei93kk/participants.json?api_key=3TKGyRJOejDpPiINIgfpJfpWlFZRFXwPb6vceiRc").then(response => response.data)
  }
  
    function getPink() {
      return axios.get("https://api.challonge.com/v1/tournaments/huk594jb/participants.json?api_key=3TKGyRJOejDpPiINIgfpJfpWlFZRFXwPb6vceiRc").then(response => response.data)
  }
  
  function getBlack() {
    return axios.get("https://api.challonge.com/v1/tournaments/73ldr679/participants.json?api_key=3TKGyRJOejDpPiINIgfpJfpWlFZRFXwPb6vceiRc").then(response => response.data)
  }
  
  function getPlat() {
    return axios.get("https://api.challonge.com/v1/tournaments/u4h7auz6/participants.json?api_key=3TKGyRJOejDpPiINIgfpJfpWlFZRFXwPb6vceiRc").then(response => response.data)
  }

  module.exports = { getBrown, getBlue, getPink, getBlack, getPlat };