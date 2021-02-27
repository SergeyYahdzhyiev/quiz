import axios from 'axios';

const url = process.env.REACT_APP_DB_URL;

export async function fetchQuestionsApi(theme) {
  const res = await axios.get(`${url}/themes/${theme}.json`);
  console.log(res);
  return Object.values(res.data)[0];
}
