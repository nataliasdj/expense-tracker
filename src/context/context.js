//file for logic implementation for react context API

import React, { useReducer, createContext } from 'react'; //default is not {}, inside {} is named

import contextReducer from './contextReducer'; // (4) see me, have to import first then create a contextReducer in context foler

//const initialState = [{ amount:5, category: "Savings", type: 'Income', date: '09-15-2021', id: 1}]; //empty - no transaction at the start 
//if dont have anything in local storage then use the one in the array
const initialState = JSON.parse(localStorage.getItem('transactions')) || 
    [{"amount":30,"category":"Deposits","type":"Income","date":"2022-01-07","id":"66e05806-ded4-44b1-8fb9-c6604bf5c6c0"},{"amount":14,"category":"Business","type":"Income","date":"09-15-2021","id":2}];

export const ExpenseTrackerContext = createContext(initialState);

//new functional component
    
//we'll be rendering full logic for context, so anything wrapped in this provider component will have access to the context
export const Provider = ( {children} ) => {

    const [transactions, dispatch] = useReducer(contextReducer, initialState);
    //this is a hook, but like a useState, basically a useState but if we have more complex state
    //what is reducer -  a single func specifying how we will be changing our state, see contextreducer to use it (4)

    //Action Creators = we gon dispatch(changing the state of transactions) an action, payload is some additional data we want to passover
    //so once you to an action, then call the func with the provided id,  then dispatch an action, yes do that, this is the id
    //so when we calling the function, we have to pass the function over to the entire application context, thus using that provider value
    const deleteTransaction = (id) => {
        dispatch({ type: 'DELETE_TRANSACTION', payload: id});
    }; 
    const addTransaction = (transaction) =>  {
        dispatch({ type:'ADD_TRANSACTION', payload: transaction });
    };

    //if u have mult val and sum it to 1 val
    //we decrement bcs we know current val is expense
    const balance = transactions.reduce((acc, currVal) => (currVal.type === 'Expense' ? acc - currVal.amount : acc + currVal.amount), 0)

    return(
        // so this is the component
        // These are, I guess, the transaction modification
        //supposed to be property and since key val sama deleteTransaction:deleteTransaction
        <ExpenseTrackerContext.Provider value={{ 
            deleteTransaction,
            addTransaction,
            transactions,//adding the list of transaction
            balance //can access balance from anywhere
        }}>

            {/* the value is all te data abt transaction, balance, actions such as adding those transaction etc 
            
            now we want access to appName from inside of all of our components
            but now we want to not use appName but the logic such as adding a transaction
            
            */}
            
            {children}
            {/* anything that is wrapped inside this provider  (export const provider ) will be visible at this children and will be wrapped in this expensetracker bla bla, so where is the stored context value, diatas yg value */}
        </ExpenseTrackerContext.Provider>
    )

}

/*
Diff b/w context and redux = 
redux itu ada yg 1 global store or 1 state where all components can get their data or info from, context itu sama,
    wrap app with rpovider and all components have the value property, since kita udh export so we can go indise our index.js to grab our whole application with our context(3)
 */