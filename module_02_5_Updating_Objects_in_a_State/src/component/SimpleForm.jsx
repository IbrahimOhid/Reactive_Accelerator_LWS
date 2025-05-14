import { useState } from 'react';

export default function SimpleForm() {
  const [person, setPerson] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  function handleChange(e) {
    setPerson({
      ...person,
      [e.target.name]: e.target.value
    });
  }

  return (
    <>
      <label>
        First name:
        <input
          name="firstName"
          value={person.firstName}
          onChange={handleChange}
        />
      </label>
      <label>
        Last name:
        <input
          name="lastName"
          value={person.lastName}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          name="email"
          value={person.email}
          onChange={handleChange}
        />
      </label>
      <p>
        FirstName: {person.firstName}{' '}
        LastName: {person.lastName}{' '}
        Email: {person.email}
      </p>
    </>
  );
}
