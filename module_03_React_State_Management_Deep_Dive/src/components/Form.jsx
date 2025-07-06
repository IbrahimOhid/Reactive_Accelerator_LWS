import React, { useState } from 'react'

const submitForm = (answer)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            if(answer.toLowerCase() === 'dhaka'){
                resolve()
            }else{
                reject(new Error('Good Guess but a Wrong Answer. Try Again!'))
            }
        }, 3000);
    })
}

const Form = () => {
    // visual State: empty, typing, submitting, success, error


    // mandatory State
    const [answer, setAnswer] = useState(''); // empty
    const [error, setError] = useState(null); // error

    // visual State
    const [status, setStatus] = useState('typing') // typing, submitting, success,

    const handleTextChange = (e) => {
        setAnswer(e.target.value);
        
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        setStatus('submitting')
        try{
            await submitForm(answer)
            setStatus('success')
        }catch(err){
            setStatus('typing')
            setError(err.message)
        }
    }


    if (status === 'success') return <h1 className='text-green-400 text-3xl font-bold py-20 px-20'>That's right!</h1>
    return (
        <div className='px-20 py-10 text-3xl leading-12'>
            <h2>City quiz</h2>
            <p>What city is located on two continents?</p>
            <form onSubmit={handleSubmit}>
                <textarea value={answer} onChange={handleTextChange} className='border' disabled={status === 'submitting'} />
                <br />
                <button className='bg-red-500 px-3 py-1 text-white rounded-lg' disabled={answer === ''|| status==='submitting'}>Submit</button>
                {status === 'submitting' && <p>Loading...</p>}
                {error && <p className='text-red-600'>{error}</p>}
            </form>

        </div>

    )
}

export default Form