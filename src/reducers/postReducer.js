const postReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_POST':
      return state.concat([action.data]);
      break;
    case 'DELETE_POST':
      return state.filter((post) => post.id !== action.id);
      break;
    case 'EDIT_POST':
      return state.map((post)=>post.id === action.id ? {...post,editing:!post.editing}:post);
      break;
    case 'UPDATE':
      return state.map((post)=>{
        if(post.id === action.id) {
          return {
             ...post,
             title:action.data.newTitle,
             message:action.data.newMessage,
             editing: !post.editing
          }
        } else return post;
      })
      break;
    default:
      return state;
      break;
  }
};

export default postReducer;
