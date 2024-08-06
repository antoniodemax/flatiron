import React, {useState} from "react";
import Filter from "./Components/Filter";


function App () {
  const [transactions, setTransactions] = useState([]);
  const [filterTerm, setFilterTerm] = useState('');

  const handleAddTransaction = (newTransaction)=>{
    setTransactions([...transactions, newTransaction]);

};

const handleFilterTransactions = (term) => {
  setFilterTerm(term);
};

const filteredTransactions = transactions.filter((transaction) => transaction.description.toLowerCase())
};

return (
  <div>
    <h1>Flatiron Bank</h1>
    {/*renders the transaction component and passes the handleAddTransaction function as a prop*/}
    <Transaction onSubmit={handleAddTransaction} />
        
        {/*renders the filter component and passes the handleFilterTransactions function as a prop*/}
        <Filter onFilter={handleFilterTransactions} />

            {/*renders the table component and passes the filteredTransactions array as a prop*/}
            <Table transactions={filteredTransactions} />
  </div>
)
