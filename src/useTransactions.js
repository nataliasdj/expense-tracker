//our custom hook
//all logic for calculation
// then fetch the data at details

import { useContext } from 'react';
import { ExpenseTrackerContext } from './context/context';

import { incomeCategories, expenseCategories, resetCategories } from './constants/categories';

//create our used transaction custom hook
//title to know if we are in income/expense
const useTransactions = (title) => {
    resetCategories(); //reset amount of each specific category to 0

    const { transactions } = useContext(ExpenseTrackerContext); //kan our transaction

    //filter either income/expense since we have all the transaction == to get the transaction of either income/expense
    const transactionPerType = transactions.filter((t) => t.type === title);
    //keep ones that are similar to title

    //now we have the categories, we sum, 2nd param for reduce is initial val
    const total = transactionPerType.reduce((acc, currVal) => acc += currVal.amount, 0);  // reduce if u have an array of num, gon sum all of num, giving 1 num, could also do for each but dont want extra var

    const categories = title === 'Income' ? incomeCategories : expenseCategories;

    console.log({transactionPerType, total, categories});

    //for each transaction, get the category, so say we have transaction, have a id, type, amount and category, say we want title is income so we will only take type income, then total is sum of all amount, then cateogries will be incomeCategories, and our incomeCategories have diff types too, ex business, investements etc with amount being 0, so we are matching the transactions with the incomeCategories(see categories.js), for each transaction we map it to the incomeCategories it belongs to ex. category salary  to income salary, then we increment the amount, so in the for each we are looping through the transaction, ^literally the amount in incomeCategories is incremented, so we have all final amount in each category, 
    transactionPerType.forEach((t) => {
        const category = categories.find((c) => c.type === t.category);

        if (category) category.amount += t.amount;
    });

    //remove categories whose amount = 0
    const filteredCategories = categories.filter((c) => c.amount > 0);

    //chart js rule, need to have property datasets
    const chartData = {
        datasets: [{
            data: filteredCategories.map((c) => c.amount),
            backgroundColor: filteredCategories.map((c) => c.color)
        }],
        labels: filteredCategories.map((c) => c.type),

    }

    return { total, chartData };
}

export default useTransactions;