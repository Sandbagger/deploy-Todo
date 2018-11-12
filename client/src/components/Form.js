import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const style = {"padding-top": "5%"}

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
            <Grid container 
                justify = "center"
                direction = "column"
                spacing = "8">
                <Grid item>
                    <TextField
                        placeholder="Add todo..."
                        style = {style}
                         type="text" 
                         value ={this.state.input}
                        onChange={this.handleInput}/>
                </Grid>
                <Grid item>
                    <Button
                        variant="contained"
                        onClick={() => this.handleClick()}
                    >Add</Button>
                </Grid>
            </Grid>
        )
    }
}

export default Form;