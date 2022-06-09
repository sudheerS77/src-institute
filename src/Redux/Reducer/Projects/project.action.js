import axios from "axios";

//Redux types
import { GET_PROJECT, GET_SPECIFIC_PROJECT, ADD_PROJECT, DELETE_PROJECT, UPDATE_PROJECT } from "./project.type";

export const getProject = () => async (dispatch) => {
    try {
        const project = axios({
            method: "GET",
            url: "https://sriher.herokuapp.com/projects/"
        }).then((response) => {
            return response;
        });        
        return dispatch({ type: GET_PROJECT, payload: (await project).data });
    } catch (error) {
        if(error.response.status === 500) {
            alert(error.response.data.error);
        }
        return dispatch({ type: "ERROR", payload: error });
    }
}

export const getSpecificProject = (_id) => async (dispatch) => {
    try {
        const specificProjectList = axios({
            method: "GET",
            url: `https://sriher.herokuapp.com/projects/get/${_id}`
        }).then((response) => {
            return response;
        });
        return dispatch({ type: GET_SPECIFIC_PROJECT, payload: (await specificProjectList).data });
    } catch (error) {
        if(error.response.status === 500) {
            alert(error.response.data.error);
        }
        return dispatch({ type: "ERROR", payload: error });
    }
}

export const addProject = (projectData) => async (dispatch) => {
    try {
        const project = axios({
            method: "POST",
            url: "https://sriher.herokuapp.com/projects/add-project",
            data: {projectData},
        }).then((response) => {
            return response;
        });
        return dispatch({ type: ADD_PROJECT, payload:  (await project).data});
    } catch (error) {
        if(error.response.status === 500) {
            alert(error.response.data.error);
        }
        return dispatch({ type: "ERROR", payload: error });
    }
}
export const updateProjectData = (projectData) => async (dispatch) => {
    try {
        const project = axios({
            method: "PUT",
            url: "https://sriher.herokuapp.com/projects/update-project",
            data: {projectData},
        }).then((response) => {
            return response;
        });
        return dispatch({ type: UPDATE_PROJECT, payload:  project});
    } catch (error) {
        if(error.response.status === 500) {
            alert(error.response.data.error);
        }
        return dispatch({ type: "ERROR", payload: error });
    }
}

export const deleteProject = (_id) => async (dispatch) => {
    try {
        const deleteProject = axios({
            method: "DELETE",
            url: `https://sriher.herokuapp.com/projects/delete/${_id}`,
        }).then((response) => {
            return response;
        });
        window.location.reload(false);
        return dispatch({ type: DELETE_PROJECT, payload: (await deleteProject).data});
    } catch (error) {
        if(error.response.status === 500) {
            alert(error.response.data.error);
        }
        return dispatch({ type: "ERROR", payload: error });
    }
}