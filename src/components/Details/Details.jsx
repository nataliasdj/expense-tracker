import React from 'react';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';

import useTransactions from '../../useTransactions';
import useStyles from './styles'; //(1) import

const Details = ({title}) => {  //(2) the prop to make it dynamic

    const classes = useStyles(); // (1) this is the hook, calling at top of func
    const { total, chartData } = useTransactions(title);
// Chart.register(ArcElement);
    
    return (
        // (1) called using classes
        <Card className={title === 'Income' ? classes.income : classes.expense}>
            <CardHeader title={title} />
            <CardContent>
                {/* variant just means behave like h5 */}
                <Typography variant="h5">
                    ${total}
                </Typography>
                <Doughnut data={chartData} />
            </CardContent>
            
        </Card>
    );
}

export default Details;
