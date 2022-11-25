import { useState } from "react";
//import { Navigate } from "react-router-dom";
import { FormattedMessage, useIntl } from "react-intl";
import imgfile from "../img/gaubiz_logo.png"
import { useDispatch } from "react-redux";
//StyleCss
import "../style.css";

function LoginForm({authenticated, login, location}) {

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState("");

  const [locale, setLocale] = useState(localStorage.getItem("locale") ?? "ko"); //local 기본값 - 한국어
  const intl = useIntl();

  const onSubmit = (e) => {
    
    localStorage.setItem("locale", locale);
    e.preventDegault();
    try {
      login({ username, password});
    } catch (err) {
      alert("로그인에 실패했습니다. 계정정보를 다시 확인해주세요.");
      setUserName("");
      setPassword("");
    }
  };

  // const { from } = location.state || { from: { pathname: "/" } };
  // if (authenticated) return <Navigate to={from} />

  return (

  <div className="app">

     <img src={imgfile} width="200" alt="logo"></img>
       <h1>
              <FormattedMessage id="title" />
      </h1>
  
    <div className="form">
      <form onSubmit={onSubmit}>
        <label htmlFor="locale">
        <FormattedMessage
          id="label"
        />
        </label>
        <select
            id="locale"
            value={locale}
            onChange={({ target: { value } }) => setLocale(value)}
        >
            <option value="ko">한국어</option>
            <option value="en-US">en-US</option>   
        </select>
      
        <button
            value={intl.formatMessage({
              id: "button",
              defaultMessage: "변경"
            })}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-save"
            >
              <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
              <polyline points="17 21 17 13 7 13 7 21"></polyline>
              <polyline points="7 3 7 8 15 8"></polyline>
            </svg>

          </button>

          <div className="form">
          <div className="input-container">
            <label htmlFor="locale">
              <FormattedMessage
              id="username"
              defaultMessage="아이디" 
              />
              </label>
          <input 
              type="text" 
              name="username" 
              id="username" 
              value={username}
              onChange={(e) => setUserName(e.target.value)}
               />
              {/* {renderErrorMessage("uname")} */}
            </div>
            <div className="input-container">
            <label htmlFor="locale">
              <FormattedMessage
              id="password"
              defaultMessage="비밀번호" 
              />
              </label>
            <input 
                type="password" 
                name="password" 
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                 />
            {/* {renderErrorMessage("pass")} */}

            </div>
          <div className="button-container">
            <input
              type="submit"
              name="submit"
              value={
                intl.formatMessage({
                  id : 'submit'
                })
              }
              
            />
            
          </div> 
      </div> 
    </form>
  </div>
</div>
    );
}
export default LoginForm;

