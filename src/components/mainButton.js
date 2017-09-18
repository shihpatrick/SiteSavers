import React from 'react';

class mainButton extends React.Component{

	constructor(props) {
	    super(props);

	    this.state = {
	      text: this.props.buttonLabel,
	      sites: this.props.sites
	    };
	}

	handleClick() {
		var sites = this.state.sites;
		if (!sites){
			alert('No Sites')
			return;
		}

		sites.forEach(function(site){
			window.open(site);
		});
	}
	
	render(){
		return(
			<button className="mainButton" onClick={this.handleClick.bind(this)}>
				{this.state.text}
			</button>
		);
	}
}

export default mainButton;