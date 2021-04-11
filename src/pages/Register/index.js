import React, { useState } from 'react';
import { useAuthContext } from '../../AuthContext';
import { Link } from 'react-router-dom';

const Register = () => {
  const { setUserName, setUserId, setUserEmail } = useAuthContext();
  const [userName, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const registeruser = () => {
    fetch('http://localhost:3002/register', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        name: userName,
        password,
      }),
    })
      .then(res => res.json())
      .then(user => {
        setUserId(user.id);
        setUserName(user.name);
        setUserEmail(user.email);
      })
      .catch(e => console.log(e));
  };
  return (
    <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
      <main className="pa4 black-80">
        <div className="measure center">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f4 fw6 ph0 mh0">Register</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="Name">
                Name
              </label>
              <input
                onChange={e => setUsername(e.target.value)}
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="name"
                name="name"
                id="name"
              />
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">
                Email
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="email"
                name="email-address"
                id="email-address"
                onChange={e => setEmail(e.target.value)}
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
            onClick={() => registeruser()}
            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib no-underline black-90"
          >
            Register
          </Link>
        </div>
      </main>
    </article>
  );
};

export default Register;
