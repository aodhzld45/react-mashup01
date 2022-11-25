import React from "react";
/** 
 * 라우트가 아닌 컴포넌트에서 라우터에서 사용하는 객체로,
 *  location, match, history를 사용하려면 withRouter라는 Hoc를 사용해야 한다. 
 * 
*/
import { useNavigate} from "react-router-dom"; 

function LogoutButton({logout}) {
	const navigate = useNavigate();

    const onClick = () => {
        logout();
        navigate("/"); //특정경로로 이동
    };
    return <button onClick={onClick}>Logout</button>;
} 

export default LogoutButton;