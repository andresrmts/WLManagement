import React from 'react';

const AdminNav = ({compRoute, adminToggle, onRouteChange}) => {
	return (
		<div>
			<h1>You are currently working on COMPETITIONNAME</h1>
			<nav style={{display: 'flex', justifyContent: 'center'}}>
				<p 
				onClick={() => compRoute('home')}
				className="f5 pa3 underline pointer">Pending registrations</p>
				<p 
				onClick={() => compRoute('registered')}
				className="f5 pa3 underline pointer">Accepted Registrations</p>
				<p 
				onClick={() => compRoute('athletelist')}
				className="f5 pa3 underline pointer">Competitor List</p>
				<p 
					onClick={() => {
						onRouteChange('competitionselection')
						adminToggle(false)
					}} 
					className="f5 pa3 underline pointer">Exit</p>
			</nav>
		</div>
	)
}

export default AdminNav;