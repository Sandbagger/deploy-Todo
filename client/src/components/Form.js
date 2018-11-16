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
        this.props.postTodo(this.state.input);
        this.setState({input:''})
    }

    render() {
        return (
            <Grid container 
                justify = "center"
                alignItems = "center"
                alignContent = "center"
                spacing = {16}>
                <Grid item>
                    <TextField
                        placeholder="Add todo..."
                        inputProps={{maxLength: 40}}
                         type="text" 
                         onKeyPress={(e) => {
                             if(e.key === 'Enter' && this.state.input.length > 0) {
                                 this.handleClick()}}}
                         helperText={"Remaining characters " + (40 - this.state.input.length)}
                         value ={this.state.input}
                        onChange={this.handleInput}/>
                </Grid>
                <Grid item>
                    <Button
                        variant="fab"
                        mini
                        color="primary"
                        onClick={() => this.handleClick()}
                    >Add</Button>
                </Grid>
            </Grid>
        )
    }
}


export default Form;