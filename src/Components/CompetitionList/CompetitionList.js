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
								name={comp.name}
								email={comp.email}
								location={comp.address.city}
								date={comp.id}
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
								name={comp.name}
								location={comp.address.city}
								date={comp.id}
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