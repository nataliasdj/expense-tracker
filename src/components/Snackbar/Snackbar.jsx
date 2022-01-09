import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import useStyles from './styles';

//hard to say snackbar since it also name of import so just change it
const CustomizedSnackbar = ({ open, setOpen }) => {
    const classes = useStyles();

    const handleClose = (event, reason) => {
        if(reason === 'clickaway') return;

        setOpen(false);
    }
    return (
        <div className={classes.root}>
            {/* the snackbar will be on the top if */}
            <Snackbar anchorOrigin={{vertical: 'top', horizontal: 'right'}}
            open={open}
            autoHideDuration={3000}//3000 ms = 3s
            onClose={handleClose}
            >
                <MuiAlert onClose={handleClose} severity="success" elevation={6} variant="filled"> Transaction successfully created.
                </MuiAlert>
                

            </Snackbar>
            
        </div>
    )
}

export default CustomizedSnackbar;
