import React, {useState} from "react";

//function will be called when form is submitted
const Transactions= ({onSubmit})=> {

    //initialized the state variables
    // const [date, setDate] =useState(new Date());
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');

   
    
    //function to handle form submit
    const handleSubmit = (e) => {
    e.preventDefault();//prevents default form behavior

    //calls onSubmit prop with the current state values
    onSubmit({category, description, amount, date});
    setCategory('');
    setDescription('');
    setAmount('');
}

 const [date, setDate] =useState([])

//return form element with onSubmit event handler
return (
    <form onSubmit={handleSubmit}>
        
        <input type="text"
        placeholder="Date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        />

        <input type="text"
        placeholder="Input Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        />

        <input type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        />

        <input type="text"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        />
        
        {/*triggers the handleSubmit function*/}
        <button type="submit">Add Transaction</button>

    </form>
);
    
};

export default Transactions;