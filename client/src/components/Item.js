import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import {ListItemText, Typography, Button } from '@material-ui/core';
import Delete from './Delete';

const Item = (props) => (
  <ListItem
        divider
        button
        onClick={() => props.onClick(props.completed, props._id)}
        style={{textDecoration: props.completed ? 'line-through' : 'none'}}>
    
            <ListItemText>
                <Typography noWrap>
                    {props.name}
                </Typography>
            </ListItemText>

            <ListItemSecondaryAction onClick={(e) => {
                  e.stopPropagation();
                props.onDelete(props._id)}}>
                  <Button >
                    <Delete isCompleted={props.completed}/>
                  </Button>
            </ListItemSecondaryAction>
  </ListItem>
);

export default Item;
