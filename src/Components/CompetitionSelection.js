import React from 'react';
import CompetitionList from './CompetitionList';

const CompetitionSelection = ({ onRouteChange, onSearchChange }) => {
	return (
		<div>
			<p className="pa4 tc" style={{ display: 'flex', justifyContent: 'center'}}>
				You are signed in as NAME. Please Create a new Competition or join an existing competition.
			</p>
			<div>
				<div style={{ display: 'flex', justifyContent: 'center'}}>
					<a onClick={() => onRouteChange('competitioncreation')} className="f6 link dim br-pill ba ph3 pv2 mb2 dib mid-gray" href="#0">New Competition</a>
				</div>
				<div className="pa4 black-80" style={{ display: 'flex', justifyContent: 'center'}}>
					<div className="measure">
					  <label for="competition" className="f6 b db mb2">Search for competition</label>
					  <input onChange={onSearchChange} id="competitionSearch" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" />
					</div>
				</div>
			</div>
			<div className="tc">
				<CompetitionList />
			</div>
		</div>
	)
}

export default CompetitionSelection;