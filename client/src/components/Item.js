import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { IconButton, ListItemText } from '@material-ui/core';
import Delete from './Delete';

const Item = (props) => (
  <ListItem
        divider
        button
        onClick={() => props.onClick(props.completed, props._id)}
        style={{textDecoration: props.completed ? 'line-through' : 'none'}}>
    <Grid container 
    spacing={0}
    alignItems='center'
    justify='space-between'> 
          <Grid item>
            <ListItemText inset>
                {props.name}
            </ListItemText>
            </Grid>
            
            <Grid item>
            <ListItem  
              button
              onClick={(e) => {
                  e.stopPropagation();
                props.onDelete(props._id)}}>
                 <Delete />
            </ListItem>
            </Grid>
            
        </Grid>
  </ListItem>
);

export default Item;
