import React, {Component} from 'react';

const ListContacts = (props) => {
  const {contacts} = props;
  return (
    <ol className='contact'>
      {contacts.map(({name, id, handle, avatarURL}) => {
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
            <button className='contact-remove' />
          </li>
        );
      })}
    </ol>
  );
};

export default ListContacts;
