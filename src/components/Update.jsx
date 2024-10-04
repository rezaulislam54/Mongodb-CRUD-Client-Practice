import { useLoaderData } from "react-router-dom";

const Update = () => {
  const updatedUser = useLoaderData();
  // console.log(updatedUser);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const remaininguser = { name, email };
    console.log(remaininguser);

    fetch(`http://localhost:5000/users/${updatedUser._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(remaininguser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("User Updated Successfully!");
          form.reset();
        }
      });
  };

  return (
    <div>
      <h1>Update Your Information</h1>
      <div className="shadow-lg border rounded-md p-10 mt-10 w-fit mx-auto">
        <form onSubmit={handleUpdate}>
          <input
            className="border bg-gray-100 mb-3 rounded-md px-4"
            type="text"
            defaultValue={updatedUser.name}
            name="name"
            id=""
          />
          <br />
          <input
            className="border bg-gray-100 rounded-md px-4"
            type="email"
            name="email"
            id=""
            defaultValue={updatedUser.email}
          />
          <br />
          <input
            type="submit"
            value="Update"
            className="bg-yellow-500 text-white rounded-lg px-4 mt-4"
          />
        </form>
      </div>
    </div>
  );
};

export default Update;