import React, { useContext } from 'react';//(3)see the context 

import { List as MUIList, ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide} from '@material-ui/core'; //why 'as'? bcs our component is List so we have to rename the list from material UI, slide is the animation
import { Delete, MoneyOff  } from '@material-ui/icons';

import { ExpenseTrackerContext } from '../../../context/context';



import useStyles from './styles';

const List = () => {
    const classes = useStyles();
    const { deleteTransaction, transactions } = useContext(ExpenseTrackerContext); //add that transactions so we can have that in out list

    //gonna map all of our transactions - cuz we have a lot
    return (
        <MUIList dense={false} className={classes.list}>
             {/* needs key bcs we are mapping over it, and key is .id, bcs each transaction needs an id */}
            {transactions.map((transactions) => (
                <Slide direction="down" in mountOnEnter unmountOnExit key={transactions.id}>
                    <ListItem>                  
                        <ListItemAvatar>
                            {/* className depends if its income or expense, thus u also see that our transaction needs to have a type */}
                            <Avatar className={transactions.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}>
                                <MoneyOff />
                            </Avatar>
                        </ListItemAvatar>
                        {/* which category is this transaction made off */}
                        <ListItemText primary={transactions.category} secondary={`$${transactions.amount} - ${transactions.date}`}/>
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="delete" onClick={()=> deleteTransaction(transactions.id)}>
                                <Delete />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>

                </Slide>
            ))}
            {/* we dont need {} bcs we dont need a function, just use () bcs it means instant return of it */}
            
        </MUIList>
    )
}

export default List
