import React from 'react';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';


const Delete = props => (
    props.isCompleted ? <DeleteForeverIcon /> : null
)

export default Delete;