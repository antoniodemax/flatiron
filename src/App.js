import React, {useEffect, useState} from "react";
import Transactions from "./Components/Transactions";
import Filter from "./Components/Filter";
import Table from "./Components/Table";
import Data from "./db.json"


function App() {
  const [transactions, setTransactions] = useState(Data.transactions);
  const [filterTerm, setFilterTerm] = useState('');

  useEffect(() => {
    // No need to fetch Data, it's already imported
  }, []);

  const handleAddTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  const handleFilterTransactions = (term) => {
    setFilterTerm(term);
  };

  const filteredTransactions = transactions.filter((transaction) => 
    transaction.description.toLowerCase().includes(filterTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Flatiron Bank</h1>
      <Transactions onSubmit={handleAddTransaction} />
      <Filter onFilter={handleFilterTransactions} />
      <Table transactions={filteredTransactions} />
    </div>
  );
}

export default App;