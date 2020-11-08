const axios = require("axios");

const ontarioApi = "https://data.ontario.ca/api/3/action/datastore_search";
const mapBoxApi = "https://api.mapbox.com/geocoding/v5/mapbox.places";
const resourceIdPhu = "455fd63b-603d-4608-8216-7d8647f43350";
const resourceIdSchools = "8b6d22e2-7065-4b0f-966f-02640be366f2";
const resourceIdLtr = "4b64488a-0523-4ebb-811a-fac2f07e6d59";

const mapBoxApiKey = process.env.MAPBOX_API_KEY;

const limitPhu = 90000;
const limitSchools = 1000;
const limitLtr = 15000;

const getAllPhuData = () => {
  return axios.get(
    `${ontarioApi}?resource_id=${resourceIdPhu}&limit=${limitPhu}`
  );
};

const getOptionsPhuData = (options) => {
  return axios.get(
    `${ontarioApi}?resource_id=${resourceIdPhu}&limit=${limitPhu}&filters=${JSON.stringify(
      options
    )}`
  );
};

const getSchoolData = () => {
  return axios.get(
    `${ontarioApi}?resource_id=${resourceIdSchools}&limit=${limitSchools}`
  );
};

const getLtrData = () => {
  return axios.get(
    `${ontarioApi}?resource_id=${resourceIdLtr}&limit=${limitLtr}`
  );
};

const getGeocoding = (query) => {
  return axios.get(
    `${mapBoxApi}/${encodeURIComponent(
      query
    )}.json?country=CA&access_token=${mapBoxApiKey}`
  );
};

module.exports = {
  getAllPhuData,
  getOptionsPhuData,
  getSchoolData,
  getGeocoding,
  getLtrData,
};
