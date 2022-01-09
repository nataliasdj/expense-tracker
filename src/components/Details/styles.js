import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
    // say wanna make income class, how to use the class first import at the details. jsx(1)
    income: {
        borderBottom: '10px solid rgba(0,255,0,0.5)',
    },
    expense: {
        borderBottom: '10px solid rgba(255,0,0,0.5)',
    }
}));