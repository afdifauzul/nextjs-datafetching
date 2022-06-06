
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const UseStyles = makeStyles((theme) => ({
    paper: {
        
        padding: theme.spacing(2),
        margin: '10px',
        maxWidth: 250,
    },
    image: {
        width: 100,
        height: 100,
        '& .img': {
            margin: 'auto',
            display: 'block',
            
        },
    },
    product:{
        flexGrow:1,
        padding: theme.spacing(2),
        margin: '10px',
        width : 350,
        maxHeight:250,
        [theme.breakpoints.down('md')]: {
            background: 'yellow',
            color: 'black'
        }
    },
}));

export default UseStyles;