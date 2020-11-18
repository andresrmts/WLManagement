import React from 'react';
import Competition from './Competition/Competition';

const CompetitionList = ({ adminToggle, useremail, yourComps, onRouteChange, competitions, myAthletes, changeWeight }) => {
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
	} else if (competitions) {
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
	} else {
		return (
			<div>
				{
					myAthletes.map((athlete, i) => {
						return (
							<Competition 
								key={i}
								name={athlete.name}
								attempt={athlete.attempt}
								snatch={athlete.snatch}
								cnj={athlete.cnj}
								changeWeight={changeWeight}
							/>
						)
					})
				}
			</div>
		)
	}
}

export default CompetitionList;