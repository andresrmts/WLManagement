import React from 'react';
import Competition from './Competition/Competition';

const CompetitionList = ({ onRouteChange }) => {
	return (
		<Competition onRouteChange={onRouteChange}/>
	)
}

export default CompetitionList;