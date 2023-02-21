import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter, selectFilters } from 'redux/FiltersSlice';

import styles from "./Filter.module.css";

export const Filter = () => {
    const filters = useSelector(selectFilters);
    const dispatch = useDispatch();

    const onFilterChange = e => {
    const input = e.target.value;
    dispatch(setFilter(input));
    };

    return (
        <div className={styles.section}>
            <h2>Find contacts by name</h2>
            <input className={styles.input} name="input" onChange={onFilterChange} value={filters}></input>
        </div>
    )
};