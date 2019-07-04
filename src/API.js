import Axios from 'axios';

const http = Axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/http://46.101.236.211:5678/api',
});

export default {
  getInfoAboutChildrens: () => http.get('/sections/1/'),
  getInfoForFutureParents: () => http.get('/sections/3/'),
  getInfoForParents: () => http.get('/sections/2/'),
  getSpecialist: () => http.get('/people/'),
  getPerson: num => http.get(`/people/${num}`),
  getCategories: newsId => http.get(`categories/${newsId}`)
}