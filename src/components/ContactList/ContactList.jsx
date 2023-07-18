import { useSelector, useDispatch } from "react-redux";
import { selectFilteredContacts } from "../../redux/selectors";
import { deleteContact, fetchContacts } from "../../redux/operations";
import { useEffect } from "react";
import css from "./ContactList.module.css";
export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDelete = (id) => dispatch(deleteContact(id));

  if (filteredContacts.length === 0) {
    return <h2>no contacts found</h2>;
  }

  return (
    <ul className={css.list}>
      {filteredContacts.map(({ id, name, phone }) => (
        <li className={css.item} key={id}>
          {name + " : " + phone}
          {
            <button
              type="button"
              name="delete"
              onClick={() => handleDelete(id)}
            >
              delete
            </button>
          }
        </li>
      ))}
    </ul>
  );
};
