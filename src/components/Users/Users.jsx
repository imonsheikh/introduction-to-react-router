import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './Users.css'

const Users = () => {

    //state 
    const users = useLoaderData()
    console.log(users);
    

    return (
        <div >
            <h2>OUr users{users.length}</h2>
            <p>Hello from user</p>
            <div className="users"> 
                {
                    users.map(user => <User 
                        key={user.id}
                        user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;