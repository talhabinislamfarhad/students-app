import React from 'react';
import './Student.css';

const Student = (props) => {
    const { name, gender, email, country, phone, salary, images } = props.student;
    return (
        <div>
            <div class="col">
                <div class="card">
                    <div className="mx-auto p-2">
                        <img className="img-fluid card-img" src={images} alt={name} />
                    </div>
                    <div class="card-body text-center">
                        <h5 class="card-title">Name: {name}</h5>
                        <h5 class="card-title">Gender: {gender}</h5>
                        <h5 class="card-title">Email: {email}</h5>
                        <h5 class="card-title">Country: {country}</h5>
                        <h5 class="card-title">Phone: {phone}</h5>
                        <h5 class="card-title">Salary: {salary}</h5>
                        <button onClick={() => props.handleButton(props.student)} className="btn btn-secondary fw-bold card-btn">Add Student</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Student;