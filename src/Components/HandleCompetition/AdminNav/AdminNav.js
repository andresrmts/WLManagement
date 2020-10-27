import React from 'react';

const AdminNav = ({compRoute, adminToggle, onRouteChange}) => {
	return (
		<nav style={{display: 'flex', justifyContent: 'center'}}>
			<p 
			onClick={() => compRoute('home')}
			className="f3 pa3 underline pointer">Registrations</p>
			<p 
			onClick={() => compRoute('athletelist')}
			className="f3 pa3 underline pointer">Competitor List</p>
			<p 
				onClick={() => {
					onRouteChange('competitionselection')
					adminToggle(false)
				}} 
				className="f3 pa3 underline pointer">Exit</p>
		</nav>
	)
}

export default AdminNav;