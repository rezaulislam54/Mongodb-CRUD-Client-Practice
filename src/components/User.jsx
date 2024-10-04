import { Link } from "react-router-dom";

const User = ({ p, setuser, user }) => {
  const { _id, name, email, password } = p;

  const handleLogout = (_id) => {
    fetch(`http://localhost:5000/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          alert("User Delete Successfully!");
          const remainingUser = user?.filter(u=> u._id !== _id)
          setuser(remainingUser);
        }
        console.log(data);
      });
  };
  return (
    <div className="shadow-lg p-5 border rounded-lg">
      <h1>Name : {name}</h1>
      <h1>Email : {email}</h1>
      <p>Password : {password}</p>
      <div className="mt-4 flex justify-around">
        <button
          onClick={() => handleLogout(_id)}
          className=" bg-blue-500 text-white px-4 rounded-lg"
        >
          Delete
        </button>
        <Link to={`/update/${_id}`}>
          <button className=" bg-blue-500 text-white px-4 rounded-lg ">
            Update
          </button>
        </Link>
      </div>
    </div>
  );
};

export default User;