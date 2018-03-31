import axios from 'axios';

//ACTION TYPES
const GET_USER = 'GET_USER';
const GET_APPLIED_JOBS = 'GET_APPLIED_JOBS';
const REMOVE_USER = 'REMOVE_USER';
//INITIAL STATE
const defaultUser = {};

//ACTION CREATORS
const getUser = user => ({type: GET_USER, user})
const RemoveUser = () => ({type: REMOVE_USER})

//Thunk
export const me = () => dispatch =>
  axios
    .get("/auth/me")
    .then(res => {
      return dispatch(getUser(res.data || defaultUser))
    })
    .catch(err => console.log(err));

export const auth = (email, password, method) => dispatch =>
  axios
    .post(`/auth/${method}`, { email, password })
    .then(res => {
      dispatch(getUser(res.data))
    })

export const logout = () => dispatch =>
  axios
    .post("/auth/logout")
    .then(_ => {
      dispatch(removeUser());
    })
    .catch(err => console.log(err));

export default function(state= defaultUser, action){
  switch(action.type){
    case GET_USER:
    return action.user;
  case REMOVE_USER:
    return defaultUser;
  default:
    return state;
  }
}