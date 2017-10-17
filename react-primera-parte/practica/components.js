import React from 'react';
import ReactDOM from 'react-dom';

/*const Welcome = ({ name }) => (
	<h1>
		Hello {name}!
		<div>con span!!</div>
	</h1>);*/

class Welcome extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<h1>
				Hello {this.props.name}!
				<div>con span y clase!!</div>
			</h1>);
	}	
} 
ReactDOM.render(<Welcome name="Fizzmod" />, document.getElementById('root'));