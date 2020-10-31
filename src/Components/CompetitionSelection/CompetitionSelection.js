import React from 'react';
import CompetitionList from '../CompetitionList/CompetitionList';

class CompetitionSelection extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			competitions: []
		}
	}

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(competitions => {
    	this.setState({ competitions: competitions })
    });
  }

	render() {
		const { onRouteChange, onSearchChange, name, useremail, adminToggle } = this.props;
		const yourComps = this.state.competitions.filter(competition => competition.id < 4);
		const availableComps = this.state.competitions.filter(competition => !yourComps.some(comp => competition.name === comp.name))
		return (
			<div>
				<p className="pa4 tc" style={{ display: 'flex', justifyContent: 'center'}}>
					You are signed in as {name}. Please Create a new Competition or join an existing competition.
				</p>
				<div>
					<div className="fl w-100 w-50-ns pa2 tc" style={{ display: 'flex', justifyContent: 'center'}}>
						<a onClick={() => onRouteChange('competitioncreation')} className="f6 link dim br-pill ba ph3 pv2 mb2 mid-gray" href="#0">New Competition</a>
					</div>
					<div className="fl w-100 w-50-ns pa1 black-80" style={{ display: 'flex', justifyContent: 'center'}}>
						<div className="measure">
						  <label htmlFor="competition" className="f6 b db mb2">Search for a competition</label>
						  <input onChange={onSearchChange} id="competitionSearch" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" />
						</div>
					</div>
					<div className="fl w-100 w-50-ns pa2 tc">
						<h1>
							Your Competitions
						</h1>
						<div>
							<CompetitionList adminToggle={adminToggle} useremail={useremail} yourComps={yourComps} onRouteChange={onRouteChange}/>
						</div>
					</div>
				</div>
				<div className="fl w-100 w-50-ns pa2 tc">
					<h1>
						Available Competitions
					</h1>
					<CompetitionList competitions={availableComps} onRouteChange={onRouteChange}/>
				</div>
			</div>
		)
	}
}

export default CompetitionSelection;