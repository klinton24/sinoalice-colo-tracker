import axios from "axios";

const wlrecord = "./WLRecord.json";

export const fetchData = async country => {
  let changeablewlrecord = wlrecord;
  if (country) {
    changeablewlrecord = `${wlrecord}/countries/${country}`;
  }
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate }
    } = await axios.get(changeablewlrecord);
    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    console.log(error);
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${wlrecord}/daily`);

    return data.map(({ confirmed, deaths, reportDate: date }) => ({
      confirmed: confirmed.total,
      deaths: deaths.total,
      date
    }));
  } catch (error) {
    return error;
  }
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries }
    } = await axios.get(`${wlrecord}/countries`);

    return countries.map(country => country.name);
  } catch (error) {
    console.log(error);
  }
};