import React, { useState } from 'react';
import { useAuthContext } from '../../AuthContext';
import { Link, Redirect } from 'react-router-dom';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { userId, setUserId, setUserName, setUserEmail } = useAuthContext();

  if (userId) {
    return <Redirect to={'/competitions' || '/'} />;
  }

  const onSubmitSignIn = () => {
    fetch('http://localhost:3002/signin', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then(res => res.json())
      .then(user => {
        console.log(user);
        if (user.id) {
          setUserId(user.id);
          setUserName(user.name);
          setUserEmail(user.email);
        }
      })
      .catch(e => console.log(e));
  };

  return (
    <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
      <main className="pa4 black-80">
        <div className="measure center">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f4 fw6 ph0 mh0">Sign In</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">
                Email
              </label>
              <input
                onChange={e => setEmail(e.target.value)}
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="email"
                name="email-address"
                id="email-address"
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">
                Password
              </label>
              <input
                onChange={e => setPassword(e.target.value)}
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="password"
                name="password"
                id="password"
              />
            </div>
          </fieldset>
        </div>
        <div className="measure center">
          <Link
            to="/competitions"
            onClick={() => onSubmitSignIn()}
            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib no-underline black-90"
          >
            Sign In
          </Link>
        </div>
      </main>
    </article>
  );
};

export default SignIn;
