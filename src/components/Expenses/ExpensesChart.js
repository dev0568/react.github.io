import React from 'react';

import Chart from '../Chart/Chart';

const ExpensesChart = (props) => {
    const chartDataPoints = [
        { label: 'Jan', value: 0 },
        { label: 'Feb', value: 1 },
        { label: 'Mar', value: 1 },
        { label: 'Apr', value: 1 },
        { label: 'May', value: 1 },
        { label: 'Jun', value: 1 },
        { label: 'Jul', value: 1 },
        { label: 'Aug', value: 1 },
        { label: 'Sep', value: 1 },
        { label: 'Oct', value: 1 },
        { label: 'Nov', value: 1 },
        { label: 'Dec', value: 1 },
    ];

    for (const expense of props.expenses) {
        const expenseMonth = expense.date.getMonth(); // starting at 0 => anuary => 0
        chartDataPoints[expenseMonth].value += expense.amount;
    }

    return <Chart dataPoints={chartDataPoints} />; 
    
};

export default ExpensesChart;