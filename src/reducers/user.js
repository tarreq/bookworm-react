import { userLoggedIn } from '../types'


const initialState = {

}

export default (state = initialState, action) => {
  switch (action.type) {

  case userLoggedIn:
    return action.user;

  default:
    return state
  }
};
