import React from 'react';

const Input = ({ filter, setFilter }) => (
    <input
        //El valor de filtro es filter
        value={filter}
        //Se setea el state filtro con el valor actual del input
        onChange={e => setFilter(e.target.value)}
    />
)

export default Input;
