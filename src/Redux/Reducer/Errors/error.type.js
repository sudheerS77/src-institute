export const SET_ERROR = "SET_ERROR";
export const HIDE_ERROR = "HIDE_ERROR";

// errorActions.js
export function setError(error){
    console.log(error);
 return {
 type: SET_ERROR,
 error: error
 }
}

export function hideError(){
 return {
 type: HIDE_ERROR
 }
}