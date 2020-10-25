import React from 'react';
import Competition from './Competition/Competition';

const CompetitionList = ({ onRouteChange, competitions }) => {
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

export default CompetitionList;