
import {Link } from 'react-router-dom'
import './App.css'

function App() {
const handleSubmit = e =>{
  e.preventDefault();
  const form = e.target;
  const name = form.name.value;
  const email = form.email.value;
  const password = form.password.value;
  const user = {name, email,password};
  console.log(user);
  
  fetch("http://localhost:5000/users", {
    method: "POST",
    headers: {
      "content-type": "Application/json",
    },

    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .then((data) => {
      if(data.insertedId){
        alert('User Create Successfully')
      }
      form.reset();
      console.log(data);
    });

}
  return (
    <div>
      <div className='flex gap-20 justify-center'>
        <h1>MONGODB CRUD OPARATION</h1>
        <Link to={"/users"}>Users</Link>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid w-96 mx-auto mt-20 gap-4">
          <input
            className="border"
            type="text"
            placeholder="Name"
            name="name"
            id=""
          />
          <input
            className="border"
            type="email"
            placeholder="Email"
            name="email"
            id=""
          />
          <input
            className="border"
            type="password"
            placeholder="Password"
            name="password"
            id=""
          />
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}

export default App
