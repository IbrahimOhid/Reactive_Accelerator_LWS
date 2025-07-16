import { useState } from 'react';

export default function UserInfoForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    function handleFirstNameChange(e) {
        setFirstName(e.target.value);
    }

    function handleLastNameChange(e) {
        setLastName(e.target.value);
    }
    const fullName = firstName + ' ' + lastName;

    return (
        <div className='w-2/4 mx-auto p-24 mt-10 border border-teal-500 px-2'>
            <h2 className='mb-2'>Let’s check you in</h2>
            <label>
                First name:{' '}
                <input
                    className='border'
                    value={firstName}
                    onChange={handleFirstNameChange}
                />
            </label>
            <br />
            <br />
            <label>
                Last name:{' '}
                <input
                    className='border'
                    value={lastName}
                    onChange={handleLastNameChange}
                />
            </label>
            <p className='mt-2'>
                Your ticket will be issued to: <b>{fullName}</b>
            </p>
        </div>
    );
}
