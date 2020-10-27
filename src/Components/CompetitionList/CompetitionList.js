import React from 'react';
import Competition from './Competition/Competition';

const CompetitionList = ({ adminToggle, useremail, yourComps, onRouteChange, competitions }) => {
	if (yourComps) {
		return (
			<div>
				{
					yourComps.map((comp, i) => {
						return (
							<Competition 
								key={i}
								name={yourComps[i].name}
								email={yourComps[i].email}
								location={yourComps[i].address.city}
								date={yourComps[i].id}
								onRouteChange={onRouteChange}
								useremail={useremail}
								adminToggle={adminToggle}
							/>
						)
					})
				}
			</div>
		)
	} else {
		return (
			<div>
				{
					competitions.map((comp, i) => {
						return (
							<Competition 
								key={i}
								name={competitions[i].name}
								location={competitions[i].address.city}
								date={competitions[i].id}
								onRouteChange={onRouteChange}
							/>
						)
					})
				}
			</div>
		)
	}
}

export default CompetitionList;