import React from "react";
import Header from "./Header";
import Controls from "./Controls";
import Squares from "./Squares";

const randomNumber = () => Math.floor(Math.random() * 255);

const makeSquare = () => {
	return ({
		color: `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`,
		hidden: false
	})
}

export class App extends React.Component {

	constructor(props) {
		// READ: https://reactjs.org/docs/react-component.html#constructor
		// Why avoid componentDidMount: https://reactjs.org/docs/react-component.html#componentdidmount
		super(props);

		this.state = this.makeNewGame(false);	
	}

	makeNewGame = (isEasy) => {
		const squares = Array(isEasy ? 3 : 6).fill().map(makeSquare);

		return {
			hasWon: false,
			tries: 0,
			squares,
			rightSquareIndex: Math.floor(Math.random() * squares.length),
			isEasy
		}
	};

	handlePlayAgain = () => {
		//READ: https://reactjs.org/docs/handling-events.html
		//READ: https://reactjs.org/docs/react-component.html#setstate
		this.setState({
			...(this.makeNewGame(this.state.isEasy))
		});
	};

	handleChangeDifficulty = (isEasy) => {
		this.setState({
			...(this.makeNewGame(isEasy))
		});
	};

	handleClickSquare = (index) => {
		const { squares, rightSquareIndex, hasWon } = this.state;
		const candidate = squares[index];

		if (hasWon || !candidate || candidate.hidden) {
			return ;
		}

		if (index === rightSquareIndex) {
			this.setState({
				hasWon: true,
				squares: squares.map(square => ({
					...square,
					color: candidate.color,
					hidden: false
				}))
			})
		} else {
			this.setState((prevState) => ({
				tries: prevState.tries + 1,
				squares: [
					
					...squares.slice(0, index),
					{
						...candidate,
						hidden: true
					},
					...squares.slice(index + 1)
				]
			}))
		}

	};

	render() {
		const { squares, rightSquareIndex, isEasy, tries, hasWon } = this.state;
		const rightSquare = squares[rightSquareIndex];

		return (
			<div>

				<Header color={rightSquare.color} />

				<Controls 
					hasWon={hasWon}
					isEasy={isEasy}
					tries={tries}
					onChangeDifficulty={this.handleChangeDifficulty}
					onPlayAgainClick={this.handlePlayAgain} />

				<Squares squares={squares}
					onClickSquare={this.handleClickSquare} />

	
			</div>
		)
	}
}

//READ: https://reactjs.org/docs/react-component.html#defaultprops
App.defaultProps = {

};

export default App;