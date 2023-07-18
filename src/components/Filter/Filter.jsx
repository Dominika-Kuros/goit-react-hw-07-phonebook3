import { useSelector, useDispatch } from "react-redux";
import { selectFilter } from "../../redux/selectors";
import { setFilter } from "../../redux/filterSlice";
import css from "./Filter.module.css";
export const Filter = () => {
  const value = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <div>
      <label className={css.label}>
        Find contacts by name
        <input
          name="filter"
          type="text"
          value={value}
          onChange={(e) => dispatch(setFilter(e.target.value.trim()))}
        />
      </label>
    </div>
  );
};
