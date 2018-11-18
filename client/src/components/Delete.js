import React from 'react';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import DeleteIcon from '@material-ui/icons/Delete';

const Delete = props => (
    props.isCompleted ? <DeleteForeverIcon /> : null
)

export default Delete;