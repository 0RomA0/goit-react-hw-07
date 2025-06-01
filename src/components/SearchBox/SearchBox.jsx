import style from "./SearchBox.module.css"
import { useDebounce } from 'use-debounce';

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
import { useEffect, useState } from "react";


export default function SearchBox() {

    const filterValue = useSelector(selectNameFilter);
    const dispatch = useDispatch();

    const [text, setText] = useState(filterValue);
    const [debounceText] = useDebounce(text, 300);

    useEffect(() => {
        dispatch(changeFilter(debounceText))
      
    }, [debounceText, dispatch]);

    return (
        <div className={ style.containerInput }>
            <label className={style.label} htmlFor=""> Finde contacts by name </label>
            <input className={style.input} type="text" value={text} onChange={(e) => setText(e.target.value)} />
        </div>
        
    )
}