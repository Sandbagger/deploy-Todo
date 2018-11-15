import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Grid from '@material-ui/core/Grid';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { IconButton, ListItemText, Typography } from '@material-ui/core';
import Delete from './Delete';

const Item = (props) => (
  <ListItem
        divider
        button
        onClick={() => props.onClick(props.completed, props._id)}
        style={{textDecoration: props.completed ? 'line-through' : 'none'}}>
    
            <ListItemText 
              inset>
                <Typography wrap='noWrap'>
                    {props.name}
                    </Typography>
            </ListItemText>
            <ListItemSecondaryAction>
               <Delete onDelete={props.onDelete(props._id)}/>
            </ListItemSecondaryAction>
  </ListItem>
);

export default Item;
