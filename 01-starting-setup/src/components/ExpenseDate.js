function ExpenseDate(){
    const year = props.date.getFullYear();
    const month = props.date.toLocaleString('en-US', {month : 'long'});
    const day = props.date.toLocaleString('en-US', {day : '2-digit'});
}

export default ExpenseDate;