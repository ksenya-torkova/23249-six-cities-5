
import {connect} from "react-redux";
import {getCity} from "../../selectors";
import {Link} from "react-router-dom";
import {login} from "../../store/api-actions";
import {loginTypes} from "../../prop-types";
import MainHeader from "../main-header/main-header";
import React, {PureComponent, createRef} from "react";

class Login extends PureComponent {
  constructor(props) {
    super(props);

    this._handleSubmit = this._handleSubmit.bind(this);
    this._loginRef = createRef();
    this._passwordRef = createRef();
  }

  render() {
    return (
      <div className="page page--gray page--login">
        <MainHeader
          isMainPage = {false}
        />

        <main className="page__main page__main--login">
          <div className="page__login-container container">
            <section className="login">
              <h1 className="login__title">Sign in</h1>
              <form
                className="login__form form"
                action="#"
                method="post"
                onSubmit = {this._handleSubmit}
              >
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden" htmlFor="email">E-mail</label>
                  <input
                    className="login__input form__input"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    required=""
                    ref = {this._loginRef}
                  />
                </div>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden" htmlFor="password">Password</label>
                  <input
                    className="login__input form__input"
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    required=""
                    ref = {this._passwordRef}
                  />
                </div>
                <button className="login__submit form__submit button" type="submit">Sign in</button>
              </form>
            </section>
            <section className="locations locations--login locations--current">
              <div className="locations__item">
                <Link to = {`/`} className="locations__item-link">
                  <span>{this.props.city}</span>
                </Link>
              </div>
            </section>
          </div>
        </main>
      </div>
    );
  }

  _handleSubmit(evt) {
    evt.preventDefault();

    this.props.onSubmit({
      login: this._loginRef.current.value,
      password: this._passwordRef.current.value,
    });
  }
}

const mapStateToProps = (state) => ({
  city: getCity(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(login(authData));
  }
});

Login.propTypes = loginTypes;

export {Login};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
