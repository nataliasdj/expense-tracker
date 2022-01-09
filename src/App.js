import React from 'react';
import { Grid } from '@material-ui/core';
import Details from './components/Details/Details';
import Main from './components/Main/Main';

import useStyles from './styles';


const App = () => {
    const classes = useStyles();
    return(
        <div>
            <Grid className={classes.grid} container spacing={0} alignItems="center" justify="center" style={{height: '100vh'}}>
                {/* extra small is full space aka full width aka 12 */}
                {/* if on mobile, this will be hidden - see comment in styles.js*/}
                <Grid item xs={12} sm={4} className={classes.mobile}>
                    <Details title="Income"/>
                </Grid>
                <Grid item xs={12} sm={3} className={classes.main}>
                    <Main />
                </Grid>
                <Grid item xs={12} sm={4} className={classes.desktop}>
                    <Details title="Income"/>
                </Grid>
                {/* use props to change the little detail ex income vs expense title in the Details component, so go to details component to make it dynamic (2) */}
                <Grid item xs={12} sm={4} classes={classes.last}>
                    <Details title="Expense" />
                </Grid>

            </Grid>
        </div>
    )
}

export default App;