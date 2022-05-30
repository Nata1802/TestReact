import './NavPan.css';


import NavBox from "../Nav_box/Nav_box";
import Logo_Bar from "../Logo_Bar/Logo_Bar";
import Login_box from "../Login_box/Login_box";


function NavPan(){
  return(
      <div className="nav">
        <Logo_Bar />
        <NavBox />
        <Login_box />
      </div>
  );
}

export default NavPan;