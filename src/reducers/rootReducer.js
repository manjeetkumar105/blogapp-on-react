const initState = {
    posts: [
        {id: 1, title: 'This is the time', body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur reprehenderit dolores officiis. Tempora rerum fugiat quae ipsa sed consectetur tempore amet, totam veniam quaerat accusamus, vitae sit expedita modi nihil!'},
        {id: 2, title: 'Time is money', body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur reprehenderit dolores officiis. Tempora rerum fugiat quae ipsa sed consectetur tempore amet, totam veniam quaerat accusamus, vitae sit expedita modi nihil!'},
        {id: 3, title: 'Go with flow', body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur reprehenderit dolores officiis. Tempora rerum fugiat quae ipsa sed consectetur tempore amet, totam veniam quaerat accusamus, vitae sit expedita modi nihil!'}
    ]
}


const rootReducer = (state=initState, action) => {
    if(action.type === 'Delete_Post') {
        let newPosts = state.posts.filter(post => {
            return post.id !== action.id
        });
        return {
            ...state,
            posts: newPosts
        }
    }
    return state
}

export default rootReducer
