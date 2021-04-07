import * as api from '../api';

// Actions Createors

export const getPosts = () => async (dispatch) =>{
    try{
        const { data } = await api.fetchPosts();

        dispatch({ type: 'FECTH_ALL', payload: data })
    }catch (error){
        console.log(error.message)
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const  {data } = await api.createPost(post);

        dispatch({ type: 'CREATE', payload: data})
    } catch(error){
        console.log(error.message);
    }
}