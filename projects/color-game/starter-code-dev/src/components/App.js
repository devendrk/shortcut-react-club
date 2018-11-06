import React from "react";
import Squares from './Squares'
import Nav from './Title'


export class App extends React.Component {
	render() {
		return (
			<div>
				<title />



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
				<Squares />
				

	
			</div>
		)
	}
}

export default App;