import React, {useState} from "react";

//function will be called when form is submitted
const Transactions= ({onSubmit})=> {

    //initialized the state variables
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');

   
    
//     //function to handle form submit
//     const handleSubmit = (e) => {
//     e.preventDefault();//prevents default form behavior

//     //calls onSubmit prop with the current state values
//     onSubmit({category, description, amount});
//     setCategory('');
//     setDescription('');
//     setAmount('');
// }
    
}