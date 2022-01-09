import React from 'react';

const isIncome = Math.round(Math.random());    //50% time its gonna switch to income or expense

const InfoCard = () => {
    return (
        <div style={{ textAlign:'center', padding: '0 10% '}}>
            Try inputting your {isIncome ? 'Income' : 'Expense'}
        </div>
    )
}

export default InfoCard;
