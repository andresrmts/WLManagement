import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../../AuthContext';

const CompetitionCard = ({ name, location, id, authorId, officials, date }) => {
  const { userId } = useAuthContext();

  const buttonRender = () => {
    if (officials.find(official => official.id === userId)) {
      return 'Handle';
    }
    return userId === authorId ? 'Admin' : 'Select Role';
  };

  return (
    <article className="mw5 tc dib bg-white br3 pa3 ma3 ba b--black-10">
      <div className="tc">
        <h1 className="tc f4">{name}</h1>
        <h2 className="tc f5">{location}</h2>
        <h3 className="tc f6">{date}</h3>
        <hr className="mw3 bb bw1 b--black-10" />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Link
            to={`/competition/${id}`}
            className="f6 link dim br-pill ba ph3 pv2 mb2 dib mid-gray pointer no-underline black-90"
          >
            {buttonRender()}
          </Link>
        </div>
      </div>
    </article>
  );
};

export default CompetitionCard;
