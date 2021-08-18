import SignInScreen from "../../Screens/SigninScreen"


const initialState = {
    jwtTokens: []
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
       /* case SignIn:
            return {...state, jwtTokens: state.jwtTokens.concat(action.payload) }





        case SignOut: 
            return {}*/
        default: return state
    }
}