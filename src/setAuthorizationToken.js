import axios from 'axios';
// https://www.youtube.com/watch?v=FyyPUIAe6kc
// https://github.com/rithmschool/patterns-client/blob/master/src/services/api.js#L4-L10


export function setAuthorizationToken(token) {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
}