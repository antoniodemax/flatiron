import React, { useEffect, useState } from "react";
import Transactions from "./Components/Transactions";
import Filter from "./Components/Filter";
import Table from "./Components/Table";
import Data from "./db.json";

function App() {
  const [transactions, setTransactions] = useState(Data.transactions);
  const [filterTerm, setFilterTerm] = useState("");

  useEffect(() => {
    fetch('https://flatiron-backend.vercel.app/transactions')
      .then((response) => response.json())
      .then((data) => {
        if (data && data.transactions) {
          setTransactions(data.transactions);
        }
      })
      .catch((error) => console.error('Error:', error));
  }, []);

  const handleAddTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  const handleFilterTransactions = (term) => {
    setFilterTerm(term);
  };

  // Filter transactions based on the filter term
  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description
      .toLowerCase()
      .includes(filterTerm.toLowerCase())
  );

  const handleDelete = (index) => {
    setTransactions(transactions.filter((transaction, i) => i !== index));
  };

  // Renders the app component
  return (
    <div>
      <h1>Flatiron Bank</h1>
      <Transactions onSubmit={handleAddTransaction} />
      <Filter onFilter={handleFilterTransactions} />
      <Table transactions={filteredTransactions} onDelete={handleDelete} />
    </div>
  );
}

export default App;