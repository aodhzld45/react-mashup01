import React, { useState, useEffect } from "react";

//react redux import

//다국어 처리 import
import { IntlProvider } from "react-intl";
import IntlPage from "./components/intlage"

//국가별 jsonData
import enUsMsg from "./lang/en-US.json";
import koMsg from "./lang/ko.json";

//라우팅 관련 import
// import {
//   Link,/*BrowserRouter,*/ Routes, Route, Router
// } from 'react-router-dom';

// import Home from "./components/Home";
// import About from './pages/About';



//로그인 인증 관련
// import LogoutButton from './components/LogoutButton';
// import { signIn } from "./auth/auth"; //인증 정보.
// import Gaubiz from "./components/gaubiz"; //인증 성공시 이동 페이지
// import AuthRoute from "./auth/AuthRouter";

//회원가입
// import RegisterForm from './components/RegisterForm';

// 함수형 컴포넌트로 선언
const App = () => {
  //locale 선언
  const locale = localStorage.getItem("locale") ?? "ko";
  const messages = { "en-US": enUsMsg, ko: koMsg }[locale];

// 로그인 상태확인 : authenticated
//   const [user, setUser] = useState(null);
//   const authenticated = user != null; //
// // 로그인, 로그아웃
// const login = ({username, password}) => setUser(signIn({ username, password }));
// const logout = () => setUser(null);

// //회원가입
// const [signUp, setSIgnUp] = useState(null);
// const signUpCompleted = ({ sign }) => setSIgnUp({ sign });

  return (
    <IntlProvider locale={locale} messages={messages}>      
        <IntlPage  /> 
        {/* authenticated={authenticated} login={login} {...props} */}
    </IntlProvider>
//     <Router>
//       <header>
//       <Link to="/">
//         <button>Home</button>
//       </Link>

//       <Link to="/about">
//       <button>About</button>
//       </Link>

//       <Link to="/gaubiz">
//       <button>gaubiz</button>
//       </Link>

// {/* authenticated == true이기 때문에, 조건 연산자를 통해서 로그인이 되었을 경우, 회원가입이 나타남. */}
//       {authenticated ? (
//           <LogoutButton logout={logout} />
//         ) : (
//           <Link to= "login">
//           <button>Login</button>
//           </Link>
//         )}
//        {authenticated ? (
//         <></>
//       ) : 
//       (signUpCompleted ? <></> :
//       <Link to="/register">
//         <button>Register</button>
//       </Link>
//       )
//     }
//     </header>

//     <main>
//     <Routes>
//       <Route exact path="/" component={Home} />
//       <Route path="/about" component={About} />
//        <Route
//         path="/register"
//         render={props => (
//           <RegisterForm authenticated={authenticated} signUpCompleted={signUpCompleted} {...props} />
//         )}
//       /> 
//       <Route
//       path="/login"
//       render={props => (
//          <IntlProvider locale={locale} messages={messages}>      
//           <IntlPage authenticated={authenticated} login={login} {...props} />
//         </IntlProvider>
//       )}
//     />

//     <AuthRoute
//       authenticated={authenticated}
//       path="/gaubiz"
//       /*  "render={props}를 쓰는 이유"
//           컴포넌트에 props를 넘기기 위해 사용한다.
//       */  
//       render={props => <Gaubiz user={user} {...props} />}
//     />
//     </Routes>
//   </main>
// </Router> 
      /* <IntlProvider locale="{locale}" messages={messages}> 
      <div className="login-form">
        <div className="title">로그인</div>

        <loginForm />  
      
         {isSubmitted ? <div>로그인에 성공하셨습니다.</div> : renderForm}

      </div>
      </IntlProvider>

       <IntlProvider locale={locale} messages={messages}>      
          <IntlPage authenticated={authenticated} login={login} {...props} />
        </IntlProvider>
      
      
      */
  );
}

export default App;