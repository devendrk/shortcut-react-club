import React from 'react';



class Navbar extends React.Component{
	

	render(){
		return(
			<div className="info">
	<div className="container">
		<div className="navbar">

			<button id="restart" >Play again</button>

			<span id="message"></span>

			<button >EASY</button>
			<button className="active">HARD</button>
		</div>
	</div>
	</div>
			
		)
	}	
	
}

export default Navbar;

