import React, { useContext } from 'react';
import { UserContext } from '../App';
import Card from './Card';

const TopcardHolder = () => {

    let [totalUsers, totalExpense, totalIncome, users] = useContext(UserContext);
    
    
    return (
        <div className='topCards'>
            <Card value = {totalUsers} name='Total users'  color='grey'/>
            <Card value = {totalIncome} name='Total Income' color='green'/>
            <Card value = {totalExpense} name='Total Expense' color='red'/>
            
            
        </div>
    );
};

export default TopcardHolder;