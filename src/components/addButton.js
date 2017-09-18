import React from 'react';

class addButton extends React.Component{

	constructor(props) {
	    super(props);

	    this.state = {
	      text: '',
	    };
	}

	onChange(){
		console.log('Changing text...')
	}

	onSubmit(e){
		e.preventDefault();
		var text = this.refs.text.value.trim();

		if(!text){
			alert('Please enter a name')
			return;
		}

		var site = this.refs.site1.value.trim();

		if (!site){
			alert('Please enter a site')
			return;
		}

		var element = {
			text: text,
			site: site
		}

		console.log(element.site)

		this.props.onTodoAdd(element);
		this.refs.text.value = '';
		this.refs.site1.value = '';
	}

	render(){
		return(
			<div>
				<form onSubmit = {this.onSubmit.bind(this)}>
					<div className="addForm">
						<label>Name </label>
						<input type="text" ref="text" onChange={this.onChange} className="form-control"/><br/>
						<label>Sites</label>
						<input type="text" ref="site1" onChange={this.onChange} className="form-control"/>
					</div>
					<button type="submit">Submit</button>
				</form>
			</div>
		)
	}
}

export default addButton;