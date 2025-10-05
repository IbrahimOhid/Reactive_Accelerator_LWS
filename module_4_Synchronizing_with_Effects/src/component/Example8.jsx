import React from 'react'
import { useDataAPI } from '../utils/useApi'
import ChildData from './ChildData';

const Example8 = () => {
    const data = useDataAPI();
    return (
    <div className='text-center py-10'>
      <p>{data}</p>
      <ChildData data={data}/>
    </div>
  )
}

export default Example8
