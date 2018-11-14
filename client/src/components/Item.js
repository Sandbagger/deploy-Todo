import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import {ListItemText, Typography } from '@material-ui/core';
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
    justify='space-between'
    wrap='noWrap'> 
          <Grid 
            item>
            <ListItemText 
              inset>
                <Typography wrap='noWrap'>
                    {props.name}
                    </Typography>
            </ListItemText>
            </Grid>
            
            <Grid item>
            <ListItem  
              button
              onClick={(e) => {   
                  e.stopPropagation();
                props.onDelete(props._id)}}>
                 <Delete completed={props.completed}/>
            </ListItem>
            </Grid>
            
        </Grid>
  </ListItem>
);

export default Item;
