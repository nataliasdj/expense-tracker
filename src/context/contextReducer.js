//Reducer => a function that takes in the old state, and an action and then returns a new state...

//action is like add transaction bla bla

//the actual logic on whats gon happen once we click the button, the ones in context is how the actions will look like

//our entire state is our transaction, aka transaction array, yg banyak id, is our state, image transaction itu kan kyk the whole array, having many id
const contextReducer = (state, action) => {
    let transactions; //so we dont declare 2 var of transactions

    //need logic to store the transactions in browser
    switch (action.type) {
        case 'DELETE_TRANSACTION':
            //if t is not equal to the action.payload then it will remove from the array, but keep all the other transaction except the one specified by action.payload
            transactions = state.filter((t) => t.id !== action.payload);

            //store in local storage
            localStorage.setItem('transactions', JSON.stringify(transactions));

            return transactions;
 
        case 'ADD_TRANSACTION':
            //we have a new array, add the action.payload then spread all the other transactions
            transactions = [action.payload, ...state];

            localStorage.setItem('transactions', JSON.stringify(transactions));

            return transactions;

        default:
            return state;
    }
};

export default contextReducer;