import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { useSelector } from "react-redux";

const ContactList = () => {
  const selectContacts = useSelector((state) => state.contacts.items);
  const selectNameFilter = useSelector((state) => state.filters.name);

  const filteredContacts = selectContacts.filter((item) =>
    item.name.toLowerCase().includes(selectNameFilter.toLowerCase())
  );

  return (
    <ul className={s.list}>
      {filteredContacts.map((item) => (
        <li key={item.id}>
          <Contact name={item.name} number={item.number} id={item.id} />
        </li>
      ))}
    </ul>
  );
};
export default ContactList;
