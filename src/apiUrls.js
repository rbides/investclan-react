
const apiBaseUrl = 'http://localhost:8000/';

const apiUrlResources = Object.freeze({
  login: 'dj-rest-auth/login/',
})

const getApiUrl = (resource) => apiBaseUrl + apiUrlResources[resource];

const apiUrls = {
  login: getApiUrl('login'),
}

export { apiUrls };