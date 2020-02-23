import React, {useContext} from 'react';
import { NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from "../context/AuthContext";

export const Navbar = () => {
  const history = useHistory();
  const { logout } = useContext(AuthContext);
  const logoutHandler: React.MouseEventHandler = event => {
    event.preventDefault()
    logout()
    history.push('')
  }
return (
  <nav>
      <div className="nav-wrapper blue darken-3" style={{ padding: '0 2rem'}}>
        <span className="brand-logo">Сокращение ссылок</span>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><NavLink to={"/create"}>Создать</NavLink></li>
          <li><NavLink to={"/links"}>Ссылки</NavLink></li>
          <li>
            <a className="waves-effect waves-teal" href="/" onClick={logoutHandler}>
              Выйти
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
