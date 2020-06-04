import React, { useReducer, createContext,useEffect } from "react";
import Jwt_Decode from "jwt-decode";
import history from '../History/history'
import store from '../store'

    const initialstate = {
    user: null,
    };
    if (localStorage.getItem("JWT_Token")) {
    const jwt_Token_decoded = Jwt_Decode(localStorage.getItem("JWT_Token"));
    if (jwt_Token_decoded.exp * 1000 < Date.now()) {
        localStorage.clear(); 
        history.push('/')
    } else {
        initialstate.user = jwt_Token_decoded;
    }
    }

    const AuthContext = createContext({
    user: null,
    login: (userData) => {},
    logout: () => {},
    });
    const AuthReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
        return {
            ...state,
            user: action.payload,
        };
        case "LOGOUT":
        return {
            ...state,
            user: null,
        };
        default:
        return state;
    }
    };

    const AuthProvider = (props) => {
        const [state, dispatch] = useReducer(AuthReducer, initialstate);
        const login = (userData) => {
        localStorage.setItem("JWT_Token", userData.token);
        dispatch({
        type: "LOGIN",
        payload: userData,
        });
        };
        const logout = () => {
        localStorage.clear();
        dispatch({ type: "LOGOUT" });
        };
        
        useEffect(() => {
        if (!store.isReady) {
        store.isReady = true;
        store.dispatch = action => dispatch(action);
        }
        return () => {
        store.isReady = false;
        };
        }, []);
        
        return (
        <AuthContext.Provider
        value={{ user: state.user, login, logout }}
        {...props}
        />
        );
        };
    
















    // const AuthProvider = (props) => {
    // const [state, dispatch] = useReducer(AuthReducer, initialstate);
    // const login = (userData) => {
    //     localStorage.setItem("JWT_Token", userData.token);
    //     dispatch({
    //     type: "LOGIN",
    //     payload: userData,
    //     });
    // };
    // const logout = () => {
    //     localStorage.clear();
    //     dispatch({ type: "LOGOUT" });
    // };

    // return (
    //     <AuthContext.Provider
    //     value={{ user: state.user, login, logout }}
    //     {...props}
    //     />
    // );
    // };

    export { AuthContext, AuthProvider };
