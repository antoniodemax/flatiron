import React from "react";

//functional component that accepts a prop when called onFilter
const Filter = ({onFilter})=>{
    const handleFilterChange = (e) =>{
        onFilter(e.target.value);
    }
}