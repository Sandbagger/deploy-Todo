import React from 'react';
import ListItem from '@material-ui/core/ListItem';

const Item = (props) => (
    <ListItem>
        <span
        onClick={() => props.onClick(props.completed, props._id)}
        style={{textDecoration: props.completed ? 'line-through' : 'none'}}>
        {props.name}
        </span>
    </ListItem>
);

export default Item;