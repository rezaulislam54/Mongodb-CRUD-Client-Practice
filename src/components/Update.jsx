import { useLoaderData } from "react-router-dom";

const Update = () => {

    const updatedUser = useLoaderData();

    return (
        <div>
            <h1>Name : {updatedUser.name}</h1>
        </div>
    );
};

export default Update;