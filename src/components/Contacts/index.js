import { useState } from 'react';
import Form from './Form';
import List from './List';

const Contacts = () => {
  const [contacts, setContacts] = useState([
    { fullname: 'Tolga', phone_number: '598753' },
    { fullname: 'Aytug', phone_number: '455987' },
  ]);

  return (
    <>
      <div id='Container'>
        <div id='title'>Contacts List</div>
        <List contacts={contacts} />
        <Form contacts={contacts} setContacts={setContacts} />
      </div>
    </>
  );
};

export default Contacts;
