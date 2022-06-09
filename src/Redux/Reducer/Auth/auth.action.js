import axios from "axios";

//Redux types
import { SIGN_IN, SIGN_UP, SIGN_OUT, ERROR } from "./auth.type";
import { clearUser } from "../User/user.action";
import { setError, hideError } from "../Errors/error.type";

export const signIn = (userData) => async (dispatch) => {
    try {
        const User = axios({
            method: "POST",
            url: "https://sriher.herokuapp.com/auth/signin",
            data: { credentials: userData }
        }).then((response) => {
            return response;
        });        
        const userRole = (await User).data.userRole;
        localStorage.setItem("SRCUser", JSON.stringify({ token: (await User).data.token }));
        if(userRole === "user") {
            window.location.href = "http://localhost:3000/"
        } 
        if(userRole === "admin") {
            window.location.href = "http://localhost:3000/admin"
        }

        return dispatch({ type: SIGN_IN , payload: (await User).data });
    } catch (error) {
        setError(error)
        return dispatch({ type: ERROR, payload: error });
    }
}


export const signUp = (userData) => async (dispatch) => {
    try {
        const User = axios({
            method: "POST",
            url: `https://sriher.herokuapp.com/auth/signup`,
            data: { credentials: userData }
        }).then((response) => {
            return response;
        });        
        localStorage.setItem("SRCUser", JSON.stringify({ token: (await User).data.token }));
        window.location.href = "http://localhost:3000/"
        
        return dispatch({ type: SIGN_UP , payload: (await User).data });
    } catch (error) {
        return dispatch({ type: ERROR, payload: error });
    }
}


export const addUserByAdmin = (userData) => async (dispatch) => {
    try {
        const User = axios({
            method: "POST",
            url: `https://sriher.herokuapp.com/auth/signup`,
            data: { credentials: userData }
        }).then((response) => {
            return response;
        });                
        return dispatch({ type: SIGN_UP , payload: (await User).data });
    } catch (error) {
        return dispatch({ type: ERROR, payload: error });
    }
}



export const signOut = () => async (dispatch) => {
    try {
      localStorage.removeItem("SRCUser");
      clearUser();
      window.location.href = "http://localhost:3000/";
      
      return dispatch({ type: SIGN_OUT, payload: {} });
    } catch (error) {
      return dispatch({ type: ERROR, payload: error });
    }
  };