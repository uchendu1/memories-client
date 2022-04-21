import { FETCH_ALL,  FETCH_POST, FETCH_BY_SEARCH, END_LOADING, START_LOADING , CREATE, UPDATE, DELETE } from "../constants/actionTypes";
import * as api from "../api/index.js";

//action creators



export const getPost = (id) => async (dispatch) => {
  try {
     dispatch({ type: START_LOADING });

    const { data } = await api.fetchPost(id);
    dispatch({ type: FETCH_POST, payload: data });
    dispatch({ type: END_LOADING });

  } catch (error) {
    console.log(error.message);
  }
};



export const getPosts = (page) => async (dispatch) => {
  try {
     dispatch({ type: START_LOADING });

    const { data } = await api.fetchPosts(page);
    dispatch({ type: FETCH_ALL, payload: data });
    dispatch({ type: END_LOADING });

  } catch (error) {
    console.log(error.message);
  }
};






export const getPostsBySearch = (searchQuery) => async (dispatch) => {
  try {    
     dispatch({ type: START_LOADING });


    const { data : {data} } = await api.fetchPostsBySearch(searchQuery);
   dispatch({ type: FETCH_BY_SEARCH , payload: {data} });
   dispatch({ type: END_LOADING });


    console.log(data);
  } catch (error) { 
    console.log(error);
  }
};



export const createPost = (post, history) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.createPost(post);
    history.push(`/posts/${data._id}`);
    console.log("createPost:post", post);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    console.log("updatePost:post", post);
    console.log("updatePost:id", id);
    const { data } = await api.updatePost(id, post);
    console.log("updatePost:id", id);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

// the apis are used in here
//exported to the home.js, some of them 
