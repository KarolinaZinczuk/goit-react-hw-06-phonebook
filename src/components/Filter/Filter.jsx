import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/FiltersSlice';

import styles from "./Filter.module.css";

export const Filter = () => {
    const dispatch = useDispatch();

    const onFilterChange = e => {
        const input = e.target.value;
        dispatch(setFilter(input));
    };

    return (
        <div className={styles.section}>
            <h2>Find contacts by name</h2>
            <input
                className={styles.input}
                type="text"
                name="filter"
                onChange={onFilterChange}>             
            </input>
        </div>
    )
};