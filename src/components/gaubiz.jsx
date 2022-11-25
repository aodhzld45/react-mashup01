// 로그인 성공시 이동페이지
import React from "react";

const Gaubiz = ({user}) => {
    const { username, password } = user || {};
    return (
        <div>
            <h2>로그인에 성공하셨습니다.</h2>
            <div>UserName: {username}</div>
            <div>Password: {password}</div>
        </div>
    )
}

export default Gaubiz;