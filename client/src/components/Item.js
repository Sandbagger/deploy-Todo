import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';

const Item = (props) => (
    <ListItem
        divider
        button
        onClick={() => props.onClick(props.completed, props._id)}
        style={{textDecoration: props.completed ? 'line-through' : 'none'}}>
       <Typography variant="subheading" noWrap>
        {props.name}
        </Typography>
    </ListItem>
);

export default Item;
