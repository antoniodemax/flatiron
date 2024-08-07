// import React from 'react';

// function Table({ transactions }) {
//     //checks if transactions prop is null
//   if (!transactions) {
//     //if transactions is null return "No transactions found" message.
//     return <div>No transactions found</div>;
//   }

//   return (
//     <div>
//       <table>
//         <thead>
//           <tr>
//             <th>Date</th>
//             <th>Description</th>
//             <th>Category</th>
//             <th>Amount</th>
//           </tr>
//         </thead>

//         <tbody>
//             {/*iterates over the transactions array*/}
//           {transactions.map((transaction, index) => (
//             <tr key={transaction.id}>
//                 {/*display*/}
//               <td>{transaction.date}</td>
//               <td>{transaction.description}</td>
//               <td>{transaction.category}</td>
//               <td>{transaction.amount}</td>
//               <td>
//                 <button onClick={() => handleDelete(index)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Table;

// Table.js
import React from "react";

const Table = ({ transactions, onDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction, index) => (
          <tr key={index}>
            <td>{transaction.description}</td>
            <td>{transaction.amount}</td>
            <td>
              <button onClick={() => onDelete(index)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;