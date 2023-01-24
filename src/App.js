import React from "react";
import {
    BrowserRouter,
    Switch,
    Route,
    Link,
    useParams,
    Redirect
} from "react-router-dom";

const users = [
    {
        id: "1",
        name: "user1"
    },
    {
        id: "2",
        name: "user2"
    },
    {
        id: "3",
        name: "user3"
    },
    {
        id: "4",
        name: "user4"
    },
    {
        id: "5",
        name: "user5"
    }
];

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/users" component={UsersListPage} />
                <Route exact path="/users/:userId/profile" component={UserPage} />
                <Route path="/users/:userId/edit" component={Edit} />
                <Redirect to="/" />
            </Switch>
        </BrowserRouter>
    );
};

export default App;

const HomePage = () => {
    return (
        <>
            <h1>Home Page</h1>
            <Link to="users">User List Page</Link>
        </>
    );
};

const UsersListPage = () => {
    return (
        <>
            <h1>Users List Page</h1>
            <Link to="/">Home Page</Link>
            <ul>
                {users.map((item) => (
                    <li key={item.id}>
                        <Link to={"/users/" + item.id + "/profile"}>{item.name}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

const UserPage = () => {
    const { userId } = useParams();
    return (
        <>
            <h1>User Page</h1>
            <ul>
                <li>
                    <Link to="/users">Users List Page</Link>
                </li>
                <li>
                    <Link to={"/users/" + userId + "/edit"}>Edit this user</Link>
                </li>
            </ul>
            <p>{"userId: " + userId}</p>
        </>
    );
};

const Edit = () => {
    const { userId } = useParams();
    return (
        <>
            <h1>Edit User Page</h1>
            <ul>
                <li>
                    <Link to={"/users/" + userId + "/profile"}>User Profile Page</Link>
                </li>
                <li>
                    <Link to={"/users/" + (Number(userId) + 1) + "/profile"}>Another User Page</Link>
                </li>
                <li>
                    <Link to="/users">User List Page</Link>
                </li>
            </ul>
        </>
    );
};
