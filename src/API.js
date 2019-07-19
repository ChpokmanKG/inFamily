import Axios from 'axios';

const http = Axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/http://46.101.236.211:5678/api',
});

const test = Axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/https://webhook.site/8678ed60-6578-445c-9222-f51bea77c86c'
})

export default {
  getInfoAboutChildrens: () => http.get('/sections/1/'),
  getInfoForFutureParents: () => http.get('/sections/3/'),
  getInfoForParents: () => http.get('/sections/2/'),
  getSpecialist: () => http.get('/people/'),
  getPerson: num => http.get(`/people/${num}/`),
  getCategories: newsId => http.get(`/categories/${newsId}/`),


  postDataForm: ( data ) => http.post('/documents/', data),
  postDataFormFiles: ( data,config ) => http.post('/documents/',data,config)
}