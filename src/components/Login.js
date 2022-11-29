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
    <section className='flex justify-center gap-10 h-screen xs:flex-col'>
        {token && <Navigate to="/list" />}
      <h2 className='flex text-2xl font-bold xs:justify-center items-center sm:flex-col'>Inicia Sesión</h2>
      
      <article className='flex m-6 xs:flex-col gap-6 sm:flex-row justify-around items-center'>

        <div className='flex justify-center'>
          <div className='flex flex-col justify-center bg-teal-300 w-60 aspect-square'>
            <div className='mx-3'>
            <h2 className='font-bold text-center pb-3'>Credenciales de acceso</h2>
              <p className='font-bold leading-5'>Email: <span className='font-normal'>challenge@alkemy.org</span></p>
              <p className='font-bold leading-5'>Password: <span className='font-normal'>react</span></p>
            </div>
          </div>
        </div>


        <form className='flex flex-col justify-center items-center' onSubmit={submitHandler}>
            <label>
                <span className='font-bold'>Email</span> <br />
                <input className='bg-transparent w-80 border-b-2 border-cyan-900 outline-0' type="text" placeholder="example@example.com" name="email" />
            </label>
            <br />
            <label>
                <span className='font-bold'>Password</span> <br />
                <input className='bg-transparent w-80 border-b-2 border-cyan-900 outline-0' type="password" name="password"/>
            </label>
            <br/>
            <button className='border-none p-1 bg-indigo-300' type="submit">Ingresar</button>
        </form>
        
      </article>
    </section>
  )
}

export default Login