import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {input:''};
    }

    handleInput = e => this.setState({input: e.target.value});
    handleClick = () => {
        console.log('Click', this.state.input)
        this.props.postTodo(this.state.input);
    }

    render() {
        return (
            <div>
             <TextField
             type="text" 
             value ={this.state.input}
             onChange={this.handleInput}/>
             <Button
                variant="contained"
                onClick={() => this.handleClick()}
                >Add</Button>
            </div>
        )
    }
}

export default Form;