
import { useRef } from 'react';
import "./formRegister.css";
import axios from 'axios';


export default function FormRegister() {

  let name = useRef()
  let email = useRef()
  let password = useRef()
  let password2 = useRef()
  let form = document.querySelector('form')
  
      async function handleSubmit(event) {
          event.preventDefault()
         
          let data = {
              [name.current.name]: name.current.value,
              [email.current.name]: email.current.value,
              [password.current.name]: password.current.value,
          
          }
          console.log(data)
          let url = 'http://localhost:8000/users'

          if(password.current.value === password2.current.value){
        
          try {
              await axios.post(
                  url,    
                  data,
                  form.reset()    
              )
          } catch(error) {
              //console.log(error)
         
          }
      }else {
        alert("las constraseñas no coinciden")
      }
    }
  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h1>Welcome!</h1>
      <p>
        Discover manga, manhua and manhwa, track your progress, have fun,
        readmanga.
      </p>
      <fieldset>
        <legend>
          <h3 className="tituloForm">Name</h3>
        </legend>
        <label htmlFor="name"></label>
        <input ref={name} type="text" id="name" name="name" required />
        <img src="./profile.png" alt="profile"/>
      </fieldset>
      <fieldset>
        <legend>
          <h3 className="tituloForm">Email</h3>
        </legend>
        <label htmlFor="email"></label>
        <input ref={email} type="email" id="email" name="email" required />
        <img src="./@.png" alt="logo@"/>
      </fieldset>
      <fieldset>
        <legend>
          <h3 className="tituloForm">Password</h3>
        </legend>
        <label htmlFor="password"></label>
        <input ref={password} type="password" id="password" name="password" required />
        <img src="./lock1.png" alt="candado" />
      </fieldset>
      <fieldset>
        <legend>
          <h3 className="tituloForm">Confirm Password </h3>
        </legend>
        <label htmlFor="password2"></label>
        <input ref={password2} type="password" id="password2" name="password2" required />
        <img src="./lock1.png"  alt="candado" />
      </fieldset>
      <div className="checkRegister">
        <input className="check" type="checkbox" value="checkbox" />
        <h4 className="textCheck">Send notification to my email</h4>
      </div>
      <input type="submit" className="butonSinginup"  value="Sing in Up" />
      <button className="botongoogle">
        <img src="./Google.png"  alt="google" />
        <h3>Sign in whit Google</h3>
      </button>
      <h4>Already have an account? <a className="login" href="https//:www.google.com">Log in</a></h4>
      <h4>Go back <a className="login" href="./App.jsx">Home Page</a></h4>
    </form>
  );
  }