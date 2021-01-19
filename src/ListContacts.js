import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class ListContacts extends Component {
  state = {
    query: '',
  };
  static propTypes = {
    contacts: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  updateQuery = (text) => {
    this.setState({query: text.trim()});
  };

  render() {
    const {contacts, onClick} = this.props;
    const {query} = this.state;
    const showingContact =
      query === ''
        ? contacts
        : contacts.filter((contact) =>
            contact.name.toLowerCase().includes(query.toLowerCase())
          );
    return (
      <div className='list-contacts'>
        <div className='list-contacts-top'>
          <input
            className='search-contacts'
            type='text'
            placeholder='Search Contacts'
            value={query}
            onChange={(event) => this.updateQuery(event.target.value)}
          />

          <Link to='/create' className='add-contact'>
            Add Contact
          </Link>
        </div>

        {showingContact.length !== contacts.length && (
          <div className='showing-contacts'>
            <span>
              Now showing {showingContact.length} of {contacts.length}
            </span>
            <button onClick={() => this.setState({query: ''})}>Show all</button>
          </div>
        )}

        <ol className='contact'>
          {showingContact.map((contact) => {
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
      </div>
    );
  }
}

export default ListContacts;
