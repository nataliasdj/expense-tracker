import React, { useState, useContext } from 'react';
import { TextField, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'; //textfield like our input

//this is where we actually use the action creators, 

import { ExpenseTrackerContext } from '../../../context/context';   //to add so we can use the action (at the onClick)

import { v4 as uuidv4 } from 'uuid';
import formatDate from '../../../utils/formatDate';
import useStyles from './styles';
import { incomeCategories, expenseCategories } from '../../../constants/categories';

import Snackbar from '../../Snackbar/Snackbar';


const initialState = {
    amount: '',
    category: '',
    type: 'Income',
    date: formatDate(new Date()),
}

const Form = () => {
    const classes = useStyles();
    // but we need to put all our inputs in our state first, thus the formData, formData is our state
    const [formData,setFormData] = useState(initialState); //so how to make this initalState affect the state

    const { addTransaction } = useContext(ExpenseTrackerContext); //which context used? the expensetracker

    const [open, setOpen] = useState(false);

    //responsible to actually create the transaction
    const createTransaction = () => {
        const transaction = { ...formData, amount: Number(formData.amount), id: uuidv4()}
        //uuid created new unique id every single time

        setOpen(true); //show the created alert if we make a transaction
        addTransaction(transaction);    //see the context to see inputs etc of action creators
        setFormData(initialState); //we are resetting the intial State so user can add a new transaction
    }

    //depends on the type of the data
    const selectedCategories = formData.type === 'Income' ? incomeCategories : expenseCategories;

    return (
        <Grid container spacing={2}>
            <Snackbar open={open} setOpen={setOpen} />
            <Grid item xs={12}>
                <Typography align="center" variant="subtitle2" gutterBottom>
                    Hello
                </Typography>
            </Grid>

            <Grid item xs={6}>
                <FormControl fullWidth>
                    {/* select type to be income or expense */}
                    <InputLabel>Type</InputLabel>
                    {/* This is how we affect inputs to affect our state, there are in total 4 inputs that affect our state, the type, category, then amount and data -> 
                    
                    formData is the curr value, onchange to change that, spread the formData to spread all value, then we populate the val with either type income or expense */}
                    <Select value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value })}>
                        <MenuItem value="Income">Income</MenuItem>
                        <MenuItem value="Expense">Expense</MenuItem>
                    </Select>
                </FormControl>
            </Grid>

            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Category</InputLabel>
                    <Select value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })}>
                        { selectedCategories.map((c) => <MenuItem key={c.type} value={c.type}> {c.type} </MenuItem>)}
                        {/* c = category, we rendering menuitem for each category, cuz this line we rendering all the categories dynamically */}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <TextField type="number" label="Amount" fullWidth value={formData.amount} onChange={(e) => setFormData({ ...formData, amount: e.target.value })}/>               
            </Grid>
            <Grid item xs={6}>
                <TextField type="date" label="Date" fullWidth value={formData.date} onChange={(e) => setFormData({ ...formData, date: formatDate(e.target.value) })} />              
            </Grid>

            <Button className={classes.button} variant="outlined" color="primary" fullWidth  onClick={createTransaction}>Create</Button>
            
        </Grid>
    )
}

export default Form
