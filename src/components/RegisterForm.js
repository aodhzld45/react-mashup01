import React, { useState } from "react";
import { Navigate } from "react-router-dom"; //react -v 6부터 redirect -> Navigate
import { users } from "../auth/auth";

function RegisterForm({ authenticated, history, location, signUpCompleted }) {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [text, setText] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        try {
            users.push({ username, password })
            runTasks();
            signUpCompleted(true)
        } catch (err) {
            alert("회원가입에 실패하였습니다.");
            setUserName("");
            setPassword("");
        }
    };

    function loading(num) {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                const result = num + 1;
                if (result > 5) {
                    const e = new Error('over loading');
                    return reject(e);
                }
                resolve(result);
            }, 500)
        });
        return promise;
    }

    async function runTasks() {
        try {
            let result = await loading(0);
            setText('[1/4]회원가입중.');
            await loading(result++);
            setText('[2/4]회원가입중..');
            await loading(result++);
            setText('[3/4]회원가입중...');
            await loading(result++);
            setText('[4/4]회원가입 완료 !');
            await loading(result++);
            history.push("/");
        } catch (e) {
            console.log(e);
        }
    }

    const {from} = location.state || {from : {pathname: "/"} };
    if (authenticated) return <Navigate to={from} />;
    return (
        <form onSubmit={onSubmit}>
        <h1>회원가입</h1>
     
        <input
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            type="text"
            placeholder="email"
        />
        <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="password"
        />
        <button type="submit">가입</button>
        <div>{text}</div>
    </form>
    );
}

export default RegisterForm;
