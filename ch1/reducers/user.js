const initialState = {
    isLoggedIn:false,
    user:{},

};

const LOG_IN = 'LOG_IN'; //액션의 이름

const loginAction = {
    type: LOG_IN,
    data :{
        nickname: '제로초',
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case LOG_IN: {
            return {
                ...state,
                isLoggedIn: true,
                user : action.data,

            }
        }
            break;
        default:
            break;
    }
};