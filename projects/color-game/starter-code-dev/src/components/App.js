import React from "react";
import Squares from './Squares';
import Title from './Title';
import Navbar from './Navbar';


const randomNum = Math.floor(Math.random() * 256);
        const color =()=> {
            return ` rgb(${randomNum},${randomNum}, ${randomNum})`
        }

        const changeColor = (e) => {
            e.PreventDefault(); 
        }

export class App extends React.Component {

	
	render() {
		return (
			<div>
				<Title />
				<Navbar />
				<Squares />
	
			</div>
		)
	}
}

export default App;