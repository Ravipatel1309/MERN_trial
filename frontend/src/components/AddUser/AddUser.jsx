import React, { useState } from 'react';
import { addUser } from '../../service/api';
import { useNavigate } from 'react-router-dom'
import './Form.css';

const AddUser = () => {
    const [name, setName] = useState('');
    const [rollNo, setRollNo] = useState('');
    const [division, setDivision] = useState('');
    const [branch, setBranch] = useState('');
    const navigate = useNavigate();

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

            await addUser(student);

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

            <button type="submit">Submit</button>
        </form>
    );
}

export default AddUser;
