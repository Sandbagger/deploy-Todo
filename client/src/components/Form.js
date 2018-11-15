import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {input:''};
    }

    handleInput = e => this.setState({input: e.target.value});
    handleClick = () => {
        console.log('Click', this.state.input)
        this.props.postTodo(this.state.input);
        this.setState({input:''})
    }

    render() {
        return (
            <Grid container 
                justify = "center"
                alignItems = "center"
                direction = "column"
                alignContent = "center"
                spacing = {16}>
                <Grid item>
                    <TextField
                        placeholder="Add todo..."
                        inputProps={{maxLength: 100}}
                         type="text" 
                         helperText={"Remaining characters " + (100 - this.state.input.length)}
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