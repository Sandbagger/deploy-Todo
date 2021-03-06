import React, {Component} from 'react';
import List from '@material-ui/core/List';
import Item from './Item.js';
import Form from './Form.js';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
const url = '/api/todo/';

const style = {
    minHeight: "500px",
    minWidth: "300px",
    marginTop: "3em",
    padding: "3em",
    textAlign: 'center',
    display: 'inline-block',
  };

class Todo extends Component {
    constructor(props){
        super(props);
        this.state = {
            todo: []
        }
    }

    componentWillMount(){
        fetch(url)
        .then(res => {
            if(!res.ok){
                if(res.status >= 400 && res.status < 500) {
                   return res.json().then(data => {
                       let err = {error: data.message};
                
                       throw err;
                   })
                } else {
                    let err = {error: 'Sorry, the server is not responding. Please try again later.'}
                    throw err;
                }
            }
                return res.json();
            })
            .then(todo => {
                return this.setState({todo});
    
            }).catch(err => {
                    console.log('Looks like something went wrong. Have you checked Todo.js request path and/or status of database connection?  Error: ' + err)
                    
            })

    };
    
    postTodo = (t) => {
        
        fetch(url,{
            method: 'post',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({name: t})
        })
        .then(res => {
            if(!res.ok){
                if(res.status >= 400 && res.status < 500) {
                   return res.json().then(data => {
                       let err = {error: data.message};
                       throw err;
                   })
                } else {
                    let err = {error: 'Sorry, the server is not responding. Please try again later.'}
                    throw err;
                }
            }
                return res.json();
            })
            .then(t => {
                return this.setState({todo: [...this.state.todo, t]});
            }).catch(err => {
                console.log('Looks like something went wrong. Have you checked Todo.js request path and/or status of database connection?  Error: ' + err)
                
        })
    }

    toggleTodo = (toggle, id) => {
       const path = '/' + id; 
        fetch(url + path,{
            method: 'put',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({completed: !toggle})
        })
        .then(res => {
            if(!res.ok){
                if(res.status >= 400 && res.status < 500) {
                   return res.json().then(data => {
                       let err = {error: data.message};
                       throw err;
                   })
                } else {
                    let err = {error: 'Sorry, the server is not responding. Please try again later.'}
                    throw err;
                }
            }
                return res.json();
            })
            .then(updated => {
                const list = this.state.todo.map(todo => {
                    if(todo._id === updated._id){
                        return {...todo, completed: !todo.completed}
                    } else {
                        return todo;
                    }
                })
                
                return this.setState({todo: list});
            }).catch(err => console.log(err))
    
    }

    deleteTodo = ( id) => {
        const path = id;
         fetch(url + path,{
             method: 'delete',
             headers: new Headers({
                 'Content-Type': 'application/json'
             }),
             
         })
         .then(res => {
             if(!res.ok){
                 if(res.status >= 400 && res.status < 500) {
                    return res.json().then(data => {
                        let err = {error: data.message};
                        throw err;
                    })
                 } else {
                     let err = {error: 'Sorry, the server is not responding. Please try again later.'}
                     throw err;
                 }
             }
                 return res.json();
             })
             .then((x) => {
                 const list = this.state.todo.filter(t => t._id !== id)
                 return this.setState({todo:list}) 
                 }).catch(err => console.log(err))
                 
             }

    render(){
        return (
            <Paper
              style={style}
              elevation={12}>
                <Grid container 
                  justify = "center"
                  direction = "column"
                  spacing = {16}>
             
                    <Grid item>
                        <Form postTodo={this.postTodo}/>
                    </Grid>

                    <Grid item>
                        <List dense>
                             {this.state.todo.map((i) => (
            
                                <Item
                                     key={i._id}
                                     {...i}
                                     onClick = {this.toggleTodo}
                                    onDelete = {this.deleteTodo}
                                     />
                                     ))}
                        </List>

                         
                    </Grid>
                
                </Grid>
            </Paper>
        )
    }
}

export default Todo;