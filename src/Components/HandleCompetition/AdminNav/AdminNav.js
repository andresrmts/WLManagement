import React from 'react';

const AdminNav = ({status, toggleStatus, compRoute, adminToggle, onRouteChange}) => {
	return (
		<div>
			<h1>You are currently working on COMPETITIONNAME</h1>
			<nav style={{display: 'flex', justifyContent: 'center'}}>
				{status === 'started' 
					? <p 
						onClick={() => toggleStatus('paused')}
						className="f6 pa3 underline pointer red ba">PAUSE COMPETITION</p>
					:	<p 
						onClick={() => toggleStatus('started')}
						className="f6 pa3 underline pointer red ba">START COMPETITION</p>
					}
				<p 
				onClick={() => compRoute('home')}
				className="f6 pa3 underline pointer">Pending registrations</p>
				<p 
				onClick={() => compRoute('registered')}
				className="f6 pa3 underline pointer">Accepted Registrations</p>
				<p 
				onClick={() => compRoute('athletelist')}
				className="f6 pa3 underline pointer">Competitor List</p>
				<p 
					onClick={() => {
						onRouteChange('competitionselection')
						adminToggle(false)
					}} 
					className="f6 pa3 underline pointer">Exit</p>
			</nav>
		</div>
	)
}

export default AdminNav;