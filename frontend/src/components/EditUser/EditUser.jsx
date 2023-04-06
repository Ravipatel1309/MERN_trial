import React, { useEffect, useState } from 'react';
import { addUser, editUser, getUser } from '../../service/api';
import { useNavigate, useParams } from 'react-router-dom'
import '../AddUser/Form.css';

const EditUser = () => {
    const [name, setName] = useState('');
    const [rollNo, setRollNo] = useState('');
    const [division, setDivision] = useState('');
    const [branch, setBranch] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        loadUserDetails();
    }, []);

    const loadUserDetails = async () => {
        const res = await getUser(id);
        console.log('====================================');
        console.log(res);
        console.log('====================================');
        setName(res.data.name);
        setRollNo(res.data.rollNo);
        setDivision(res.data.div);
        setBranch(res.data.branch);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (name !== '' && rollNo !== '' && division !== '' && branch !== '') {
            const student = {
                name: name,
                rollNo: rollNo,
                div: division,
                branch: branch
            };
            // console.log(student);

            await editUser(student, id);

            navigate('/all');
        }

        // console.log('Name:', name);
        // console.log('Roll No:', rollNo);
        // console.log('Division:', division);
        // console.log('Branch:', branch);
    };

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
            </div>

            <div className="form-group">
                <label htmlFor="rollNo">Roll No</label>
                <input
                    type="text"
                    id="rollNo"
                    value={rollNo}
                    onChange={(event) => setRollNo(event.target.value)}
                />
            </div>

            <div className="form-group">
                <label htmlFor="division">Division</label>
                <input
                    type="text"
                    id="division"
                    value={division}
                    onChange={(event) => setDivision(event.target.value)}
                />
            </div>

            <div className="form-group">
                <label htmlFor="branch">Branch</label>
                <input
                    type="text"
                    id="branch"
                    value={branch}
                    onChange={(event) => setBranch(event.target.value)}
                />
            </div>

            <button type="submit">Edit User</button>
        </form>
    );
}

export default EditUser;
