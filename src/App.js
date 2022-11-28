// import React, { useState, useEffect } from "react";

//다국어 처리 import
import { IntlProvider } from "react-intl";
import IntlPage from "./components/intlage"

//국가별 jsonData
import enUsMsg from "./lang/en-US.json";
import koMsg from "./lang/ko.json";

// 함수형 컴포넌트로 선언
const App = () => {
  //locale 선언
  const locale = localStorage.getItem("locale") ?? "ko";
  const messages = { "en-US": enUsMsg, ko: koMsg }[locale];

  return (
    <IntlProvider locale={locale} messages={messages}>      
        <IntlPage  /> 
        {/* authenticated={authenticated} login={login} {...props} */}
    </IntlProvider>

  );
}

export default App;