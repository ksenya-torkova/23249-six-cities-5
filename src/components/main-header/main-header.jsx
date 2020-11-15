import {Link} from "react-router-dom";
import {mainHeaderTypes} from "../../prop-types";
import React from "react";
import {connect} from "react-redux";
import {AuthorizationStatus} from "../../const";
import {getAuthorizationStatus, getUserName} from "../../selectors";

const MainHeader = (props) => {
  const {authorizationStatus, isMainPage, userName} = props;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            {isMainPage ?
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </a>
              :
              <Link to = {`/`} className="header__logo-link">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            }
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link to = {`/favorites`} className="header__nav-link header__nav-link--profile">
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span className="header__user-name user__name">
                    {authorizationStatus === AuthorizationStatus.NO_AUTH ?
                      `Sign In` :
                      userName}
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

MainHeader.propTypes = mainHeaderTypes;

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  userName: getUserName(state),
});

const MainHeaderMemo = React.memo(MainHeader);

export {MainHeaderMemo};
export default connect(mapStateToProps)(MainHeaderMemo);
