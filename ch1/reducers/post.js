export const initialState = {
    mainPosts:[],
};

const ADD_POST = 'ADD_POST';
const ADD_DUMMY = 'ADD_DUMMY';

const addPost = {
    type : ADD_POST,
}

const addDummy = {
    type: ADD_DUMMY,
    data : {
        content: 'Hello',
        UserId:1,
        User:{
            nickname: 'chaeyeon',
        },
    },
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_POST:{
            return {
                ...state,
                mainPosts:[action.data,...state.mainPosts],

            };
        }
        case ADD_DUMMY:{
            let prevState;
            return{
                ...state,
                mainPosts:[action.data, ...state.mainPosts],

            };
        }
    }
};




setState((prevState) => {
    return {

        //불변성
        field: {...prevState.field },
    };
});


export default reducer;