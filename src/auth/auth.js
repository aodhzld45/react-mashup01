//인증용 user 더미데이터

 export const users = [
    {
      username: "gaubiz",
      password: "51440"
    },
    {
      username: "gaubiz2",
      password: "gaubiz2"
    }
  ];

  // //아이디나 비밀번호가 틀릴경우 오류 메세지
  // const errors = {
  //   uname: "아이디가 다릅니다.",
  //   pass: "비밀번호가 틀렸습니다."
  // };

//로그인한 사용자 인증 
export function signIn({username, password}) {
    const user = users.find(
        (user) => user.username === username && user.password === password
    );
    //로그인 정보가 없을 경우 에러메세지
    if (user === undefined) throw new Error(); 
    return user;
}

  // const handleSubmit = (event) => {
  //   //페이지 재로딩
  //   event.preventDefault();

  //   localStorage.setItem("locale", locale);
    
  //   var { uname, pass } = document.forms[0];

  //   // 더미데이터에서 userId를 찾음
  //   const userData = database.find((user) => user.username === uname.value);

  //   // 더미데이터와 입력값 비교
  //   if (userData) {
  //     if (userData.password !== pass.value) {
  //       // Invalid password
  //       setErrorMessages({ name: "pass", message: errors.pass });
  //     } else {
  //       setIsSubmitted(true);
  //     }
  //   } else {
  //     // 아이디를 찾을수 없을 경우
  //     setErrorMessages({ name: "uname", message: errors.uname });
  //   }
  // };
  // JSX code for login form
  // const renderForm = (
  //   <div className="form">
  //     <form onSubmit={handleSubmit}>
  //       <div className="input-container">
  //         <label>아이디 </label>
  //         <input type="text" name="uname" id="uname" required />
  //         {renderErrorMessage("uname")}
  //       </div>
  //       <div className="input-container">
  //         <label>비밀번호 </label>
  //         <input type="password" name="pass" id="pass" required />
  //         {renderErrorMessage("pass")}
  //       </div>
  //       <div className="button-container">
  //         <input type="submit" name="submit" id="submit" value="확인" />
  //       </div>
  //     </form>
  //   </div>
   
  // );