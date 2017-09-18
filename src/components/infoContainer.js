import React from 'react';
import Main from './mainButton.js';
import Edit from './editButton.js';

class infoContainer extends React.Component {

	constructor(props) {
	    super(props);

	    this.state = {
	    	text: ''
	    }

	}

	render(){
		return(
			<div>
				<Main buttonLabel = {this.props.label} sites = {this.props.sites}/>
				<Edit />
			</div>
		);
	}
}

export default infoContainer;