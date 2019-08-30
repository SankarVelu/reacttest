import React from 'react';

import Img from '../images/icon-2.svg';
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	Section() {
		return (
			<div className="Intro-Section section-2">
				<div className="container">
					<h2>About Us</h2>
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
				</div>
			</div>	
		);
	}
	render() {
		return (
			<div className="Intro-Section">
				<div className="container">
					<h2>Welcome Text</h2>
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>

					<img src={Img} alt="asd" />
				</div>
				{this.Section()}
			</div>
		);
	}
}
export default App;