import React, {useRef} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter, selectFilters } from './FiltersSlice';

export function Filters() {
    const filters = useSelector(selectFilters);
    const inputRef = useRef(null);
    const dispatch = useDispatch();

    return (
        <div>
            <h3>Find contacts by name</h3>
            <input type="text" onChange={(e) => dispatch(setFilter(e.currentTarget.value))}></input>
        </div>
    );
};
