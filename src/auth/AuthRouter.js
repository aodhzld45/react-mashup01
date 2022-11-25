import React from "react";
import { Route, Navigate } from 'react-router-dom';

/*
1.<Roter>는 렌더링할 컴포넌트를 받는다.
2.authenticated가 참인 경우, render(component 에서 props 전달)인 경우와 일반
component인 경우를 나눈어 rendering 해준다.
3. authenticated가 거짓인 경우 /login path로 redirect 해준다.

*/ 
const AuthRoute = ({ authenticated, component: Component, render, ...rest }) => {
    return (
        <div>
            <Route
                {...rest}
                render={(props) =>
                    authenticated ? (
                        render ? (
                            render(props)
                        ) : (
                            <Component {...props} />
                        )
                    ) : (
                        <Navigate
                            to={{ pathname: "/login", state: { from: props.location } }}
                        />
                    )
                }
            />
        </div>
    )
}

export default AuthRoute
