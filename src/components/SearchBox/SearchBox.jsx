import style from "./SearchBox.module.css"


import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

export default function SearchBox() {

    const filterValue = useSelector((state) => state.filters.name)
    const dispatch = useDispatch();

    return (
        <div className={ style.containerInput }>
            <label className={style.label} htmlFor=""> Finde contacts by name </label>
            <input className={style.input} type="text" value={filterValue} onChange={(event) => dispatch(changeFilter(event.target.value))} />
        </div>
    )
}