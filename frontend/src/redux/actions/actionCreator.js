import axios from 'axios';

import actionTypes from './actionTypes';

export function updateUser(propertyName,value,userId){
  return async dispatch=>{
    try{
      const body={}
      body[`${propertyName}`]=value
      const {data}=await axios.put(`http://localhost:5000/api/user/${userId}`,body)
      
      dispatch({
        type:actionTypes.UPDATE_USER,
        payload:{
          propertyName,
          value
        }
      })
    } catch(error){
      console.log(error)
    }
  }

}

export function loadAllUsers() {
  return async dispatch => {
   
        try {
          
          const {data} = await axios.get('http://localhost:5000/api/user');
          
          dispatch({
            type: actionTypes.LOAD_ALL_USERS,
            data,
            
          });
        } catch (error) {
          console.log(error);
        }
   
   return true;
    
  };
}

export function loadAllQuiz() {
  return async dispatch => {
   
        try {
          
          const {data} = await axios.get('http://localhost:5000/api/quiz'
         );
      
          dispatch({
            type: actionTypes.LOAD_ALL_QUIZ,
            data,
            
          });
        } catch (error) {
          console.log(error);
        }
   

   return true;
    
  };
}

export function checkActiveQuiz(data) {
  return dispatch=>{
    try {
      dispatch({
        type: actionTypes.ACTIVE_QUIZ,
        data
      })
    } catch (error) {
      console.log(error)
    }

  }

}
export function addScoreQuiz(data){
  return dispatch=>{
    try {
      dispatch({
        type: actionTypes.SCORE_QUIZ,
        data
      })

    } catch(error){
      console.log(error)
    }
  }
}
export function totalScoreUpdate({sessionScore, userId}){ 
  const user={
    totalScore:sessionScore
  }
  return async dispatch=>{
    const {data} = await axios.put(
      `http://localhost:5000/api/user/${userId}`,
    user);
    try {
      dispatch({
        type: actionTypes.TOTAL_SCORE,
        data
      })

    } catch(error){
      console.log(error)
    }
  }
}
export function login(loginData) {
  
  return async (dispatch) => {
    
    try {
      const { data } = await axios.post('http://localhost:5000/api/auth/login', loginData );
      return dispatch({
        type: actionTypes.AUTH_LOGIN,
        user: data,
      });
    } catch (error) {
      if (error?.response?.status === 401) {
        return dispatch({
          type: actionTypes.AUTH_LOGIN_ERROR,
          message: error.message,
        });
      }

      return dispatch({
        type: actionTypes.ERROR_GENERIC,
        message: error.message,
      });
    }
  };
}

export function logout() {
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
}

export function loadUsers() {
  return async (dispatch) => {
    const { data } = await axios('http://localhost:5000/api/user');
    dispatch({
      type: actionTypes.USERS_LOAD,
      users: data,
    });
  };
}

export function signup(signupData) {
  
  return async (dispatch) => {
    try {
      const { data } = await axios.post('/api/auth/signup',  signupData );
      
      return dispatch({
        type: actionTypes.AUTH_SIGNUP,
        user: data,
      });
    } catch (error) {
      if (error?.response?.status === 401) {
        return dispatch({
          type: actionTypes.AUTH_SIGNUP_ERROR,
          message: error.message,
        });
      }

      return dispatch({
        type: actionTypes.ERROR_GENERIC,
        message: error.message,
      });
    }
  };
}


