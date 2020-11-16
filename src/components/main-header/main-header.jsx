import {AuthorizationStatus} from "../../const";
import {connect} from "react-redux";
import {getAuthorizationStatus, getUserInfo} from "../../selectors";
import {Link} from "react-router-dom";
import {mainHeaderTypes} from "../../prop-types";
import React from "react";

const MainHeader = (props) => {
  const {authorizationStatus, isMainPage, userInfo} = props;
  const {email: userName, avatarUrl: avatar} = userInfo;

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
                    {authorizationStatus === AuthorizationStatus.AUTH &&
                      <img className="header__avatar user__avatar" src={avatar} alt="user avatar" width="20" height="20" />
                    }
                  </div>
                  <span className="header__user-name user__name">
                    {authorizationStatus === AuthorizationStatus.NO_AUTH ?
                      `Sign In`
                      : userName
                    }
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
  userInfo: getUserInfo(state),
});

const MainHeaderMemo = React.memo(MainHeader);

export {MainHeaderMemo};
export default connect(mapStateToProps)(MainHeaderMemo);
