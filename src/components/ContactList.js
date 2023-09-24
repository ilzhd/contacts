import React from 'react';
import { useSelector } from 'react-redux';

<<<<<<< Updated upstream
const ContactList = () => {
  const contacts = useSelector((state) => state.contacts);

=======
const ContactList = ({contacts}) => {
    if (!contacts?.length){
        return 'загрузка...'
    }
>>>>>>> Stashed changes
  return (
    <div className="contact-list">
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
<<<<<<< Updated upstream
            <div>{contact.имя} {contact.фамилия}</div>
            <div>{contact.телефон}</div>
=======
            <div>{contact.name} {contact.lastname}</div>
            <div>{contact.phone}</div>
>>>>>>> Stashed changes
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;