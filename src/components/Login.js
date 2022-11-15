import axios from 'axios';
import swAlert from '@sweetalert/with-react';
import { Navigate, useNavigate } from 'react-router-dom'; 


const Login = () => {

  const navigate = useNavigate()

  const submitHandler = e => {
    e.preventDefault();
    // variables que capturan la info 
    const email = e.target.email.value;
    const password = e.target.password.value;

    // variable para verificar si se esta mandando los datos correctos
    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
    // cvalidacion de los campos
    if (email === '' || password === ''){
      swAlert(<span>Los campos no pueden estar vacios</span>);
      return;
    }

    if (email !== '' && !regexEmail.test(email)){
      swAlert(<span>Invalid Email</span>);
      return;
    }

    if( email !== 'challenge@alkemy.org' || password !== 'react'){
      swAlert(<span>fail login</span>);
      return;
    }

    axios.post('http://challenge-react.alkemy.org', {email, password})
      .then(res => {
        swAlert(<span>Ingreso Exitoso</span>);  
        const token = res.data.token
        sessionStorage.setItem('token', token);
        navigate('/list');
      })
      .catch(err => console.log(err))
  }

  let token = sessionStorage.getItem('token');

  return (
    <>
    {token && <Navigate to="/list" />}
    <h2>Inicia Sesión</h2>
    <form onSubmit={submitHandler}>
        <label>
            <span>Email</span> <br />
            <input type="text" placeholder="" name="email" />
        </label>
        <br />
        <label>
            <span>Password</span> <br />
            <input type="password" name="password"/>
        </label>
        <br/>
        <button type="submit">Ingresar</button>
    </form>
    </>
  )
}

export default Login