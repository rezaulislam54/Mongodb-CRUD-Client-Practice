import { useLoaderData } from "react-router-dom";
import User from "./User";
import { useState } from "react";

const Users = () => {

    const loaderUser = useLoaderData();
    const [user, setuser] = useState(loaderUser);
    return (
      <div>
        <h1>All Users Heafre : {user.length}</h1>

        <div className="grid grid-cols-4 mt-10 gap-4">
          {user?.map((p) => (
            <User key={p._id} setuser={setuser} user={user} p={p}></User>
          ))}
        </div>
      </div>
    );
};

export default Users;