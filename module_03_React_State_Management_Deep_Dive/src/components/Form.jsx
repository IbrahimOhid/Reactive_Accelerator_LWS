import React, { useState } from 'react'

const submitForm = (answer) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (answer.toLowerCase === 'Eidgaon') {
                resolve();
            } else {
                reject(new Error('Good guess but a wrong answer. Try again!'))
            }
        }, 3000);
    })
}

const Form = () => {
    // visual state : typing, submitting, success

    //mandatory state
    const [answer, setAnswer] = useState('');
    const [error, setError] = useState(null);
    // visual state
    const [status, setStatus] = useState('typing')

    // handleTextChange
    const handleTextChange = (e) => {
        setError(null)
        setAnswer(e.target.value)
    }
    if (status === 'success') {
        return <h1 className='mx-auto py-20 px-20 text-green-500 font-bold text-3xl'>That's right!</h1>
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting')
        try {
            await submitForm(answer);
            setStatus('success')
        }
        catch (err){
            setStatus('typing')
            setError(err.message)
        }
    }
    return (
        <div className='mx-auto container w-2/4 py-20'>
            <h2>City quiz</h2>
            <p>
                In which city is there a billboard that turns air into drinkable water?
            </p>
            <form onSubmit={handleSubmit}>
                <textarea className='border' value={answer} onChange={handleTextChange} disabled={status === 'submitting'} />
                <br />
                <button className='bg-red-600 py-1 px-3 text-white rounded-3xl' disabled={answer === '' || status === 'submitting'} >
                    Submit
                </button>
                {status === 'submitting' && <p>Loading...</p>}
                {error && <p className='text-red-600'>{error}</p>}

            </form>
        </div>
    )
}

export default Form