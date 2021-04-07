export default (posts = [], action) =>{
    switch(action.type){
        case 'FECTH_ALL':
            return action.payload;
        case 'CREATE':
            return [...posts, action.payload];
        default:
            return posts
    }
}