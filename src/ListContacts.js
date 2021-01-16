import React, {Component} from 'react';

const ListContacts = (props) => {
  const {contacts, onClick} = props;
  return (
    <ol className='contact'>
      {contacts.map((contact) => {
        const {name, id, handle, avatarURL} = contact;
        return (
          <li key={id} className='contact-list-item'>
            <div
              style={{backgroundImage: `url(${avatarURL})`}}
              className='contact-avatar'
            />
            <div className='contact-details'>
              <p>{name}</p>
              <p>{handle}</p>
            </div>
            <button
              className='contact-remove'
              onClick={() => onClick(contact)}
            />
          </li>
        );
      })}
    </ol>
  );
};

export default ListContacts;
