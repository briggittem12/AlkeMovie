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
    <form onSubmit={submitHandler}>
        <label>
            <input type="text" name="keyword"  />
        </label>
        <button>Search</button>
    </form>
  )
}

export default Search