import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthContext } from '../../../../AuthContext';

const AthleteRegistration = ({ onAdd }) => {
  const { compId } = useParams();
  const { userId, userName } = useAuthContext();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [snatch, setSnatch] = useState('');
  const [cnj, setCnj] = useState('');
  const athlete = {
    compid: compId,
    name,
    age,
    snatch,
    cnj,
    coachname: userName,
    coachid: userId,
  };

  // const addAthlete = () => {
  //   onAdd(athlete);
  //   document.getElementById('name').value = '';
  //   document.getElementById('age').value = '';
  //   document.getElementById('snatch').value = '';
  //   document.getElementById('cnj').value = '';
  // };

  const addAthlete = () => {
    fetch(`http://localhost:3002/competition/${compId}/createathlete`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(athlete),
    })
      .then(res => res.json())
      .then(regAth => onAdd(regAth));
  };

  return (
    <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
      <main className="pa4 black-80">
        <div className="measure center">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f4 fw6 ph0 mh0">Register Athlete</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="Name">
                Name
              </label>
              <input
                onChange={e => setName(e.target.value)}
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="name"
                name="name"
                id="name"
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="age">
                Age (number between 1 and 99)
              </label>
              <input
                onChange={e => setAge(e.target.value)}
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="number"
                min="1"
                max="99"
                name="age"
                id="age"
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="snatch">
                Snatch
              </label>
              <input
                onChange={e => setSnatch(e.target.value)}
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="number"
                min="10"
                max="230"
                name="snatch"
                id="snatch"
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="snatch">
                Clean and Jerk
              </label>
              <input
                onChange={e => setCnj(e.target.value)}
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="number"
                min="10"
                max="300"
                name="cnj"
                id="cnj"
              />
            </div>
          </fieldset>
        </div>
        <div className="measure center">
          <input
            onClick={() => addAthlete()}
            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
            type="submit"
            value="Register"
          />
        </div>
      </main>
    </article>
  );
};

export default AthleteRegistration;
