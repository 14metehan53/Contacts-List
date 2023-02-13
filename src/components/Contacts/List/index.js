import { useState } from 'react';

const List = ({ contacts }) => {
  const [filterText, setFilterText] = useState('');

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key].toString().toLowerCase().includes(filterText.toLowerCase())
    );
  });

  return (
    <>
      <div>
        <input
          placeholder='Search...'
          onChange={(e) => {
            setFilterText(e.target.value);
          }}
        />
      </div>
      <div>
        <ul className='list'>
          {filtered.map((contact, key) => (
            <li key={key}>
              <span>{contact.fullname}</span>
              <span>{contact.phone_number}</span>
            </li>
          ))}
        </ul>

        <small>
          <p>Total Contacts ({filtered.length})</p>
        </small>
      </div>
    </>
  );
};

export default List;
