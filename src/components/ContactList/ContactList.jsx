import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { useSelector } from "react-redux";

const ContactList = () => {
  const selectContacts = useSelector((state) => state.contacts.items);

  const data = selectContacts;

  return (
    <ul className={s.list}>
      {data.map((item) => (
        <li key={item.id}>
          <Contact name={item.name} number={item.number} id={item.id} />
        </li>
      ))}
    </ul>
  );
};
export default ContactList;
