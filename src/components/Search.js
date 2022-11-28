import React from 'react'
import swAlert from '@sweetalert/with-react'
import { useNavigate } from 'react-router-dom'

const Search = () => {

    let navigate = useNavigate()

    const submitHandler = e => {
        e.preventDefault();
        const keyword = e.currentTarget.keyword.value.trim();

        if(keyword.length === 0){
            swAlert(<h3>Introduce un valor valido</h3>)
        } else {
            e.currentTarget.keyword.value = '';
            navigate(`/results?keyword=${keyword}`)
        }
    }


  return (
    <form className='flex m-3 justify-center' onSubmit={submitHandler} >
        <label className='border-none'>
            <input className='bg-transparent p-1 border-b-2 border-cyan-900 outline-0' type="text" name="keyword"  />
        </label>
        <button className='border-none p-1 bg-indigo-300' >Search</button>
    </form>
  )
}

export default Search