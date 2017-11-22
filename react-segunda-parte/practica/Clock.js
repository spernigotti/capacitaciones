import React from 'react';

class Clock extends React.Component {
	constructor(props) {
		super(props);

		this.state = { date: new Date() };
	}

	componentDidMount() {
		this.timerID = setInterval(this.tick, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	tick = () => {
		this.setState({ date: new Date() });
	}

	render() {
		return (
			<div>
			  <h1>Hora</h1>
			  <div>La hora es {this.state.date.toLocaleTimeString()}</div>
			</div>
		);
	}
}

export default Clock;
