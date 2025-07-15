import React, { useState } from 'react'

const AnotherForm = () => {
  const [inputs, setInputs] = useState([
    {
      id: 1,
      label: 'input',
      placeholder: 'Enter Your Name'
    },
  ])

  const handleAddInput = ()=>{
    setInputs([
      ...inputs,
      {
        id: inputs[inputs.length - 1].id + 1,
        label: 'input',
        placeholder: 'Enter Your Name'
      }
    ])
  }
  return (
    <div className='p-20 mx-auto w-2/4 container' >
      {
        inputs.map((input) =>
          <div key={input.id}>
            <input className='border border-teal-600 py-1 px-3 mb-2' type="text" name="" id="" label={input.label} placeholder={input.placeholder} />
          </div>
        )
      }
      <div style={{ marginTop: '20px' }}>
        <button onClick={handleAddInput} className='bg-teal-500 text-white font-bold px-3 py-1 cursor-pointer rounded-2xl'>Add Input</button>
      </div>
    </div>
  )
}

export default AnotherForm