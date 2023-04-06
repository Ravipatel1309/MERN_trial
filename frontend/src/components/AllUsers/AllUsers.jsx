import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { deleteUser, getUsers } from "../../service/api.js";

const AllUsers = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllUsers();
    }, []);

    const getAllUsers = async () => {
        let response = await getUsers();
        setUsers(response.data);
        // console.log(response.data);
    }

    const deleteUserDetails = async (id) => {
        await deleteUser(id);
        getAllUsers();
    }

    return (
        <Table striped bordered hover style={{ width: '80%', margin: 'auto', marginTop: '5rem' }}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>RollNo</th>
                    <th>Division</th>
                    <th>Branch</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user) =>
                        <tr key={user._id}>
                            <td>{user.name}</td>
                            <td>{user.rollNo}</td>
                            <td>{user.div}</td>
                            <td>{user.branch}</td>
                            <td>
                                <Link component={Link} to={`/edit/${user._id}`}><Button>Edit</Button></Link>{' '}
                                <Button variant="danger" onClick={() => { deleteUserDetails(user._id) }}>Delete</Button>

                            </td>


                        </tr>
                    )
                }
                {/* <tr>
                    <td>John Doe</td>
                    <td>12345</td>
                    <td>A</td>
                    <td>Computer Science</td>
                </tr> */}
            </tbody>
        </Table>
    );
}

export default AllUsers;
