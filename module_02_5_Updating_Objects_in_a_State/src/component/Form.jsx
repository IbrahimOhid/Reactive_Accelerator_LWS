import { useState } from 'react';

export default function Form() {
  const [person, setPerson] = useState({
    firstName: 'Barbara',
    lastName: 'Hepworth',
    email: 'bhepworth@sculpture.com'
  });

  function handleFirstNameChange(e) {
    setPerson({
        ...person,
        firstName: e.target.value
    })
  }

  function handleLastNameChange(e) {
    setPerson({
        ...person,
        lastName: e.target.value
    })
  }

  function handleEmailChange(e) {
    setPerson({
        ...person,
        email: e.target.value
    })
  }

  return (
    <>
      <label>
        First name:
        <input
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Last name:
        <input
          onChange={handleLastNameChange}
        />
      </label>
      <label>
        Email:
        <input
          onChange={handleEmailChange}
        />
      </label>
      <p>
        {person.firstName}{' '}
        {person.lastName}{' '}
        ({person.email})
      </p>
    </>
  );
}
