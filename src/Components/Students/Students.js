import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Student from '../Student/Student';

const Students = () => {
    const [students, setStudents] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('./fake-data.json')
            .then(res => res.json())
            .then(data => setStudents(data))
    }, []);
    const handleButton = (student) => {
        const newStudent = [...cart, student];
        setCart(newStudent)
    }
    return (
        <div className="container-fluid mt-5 mb-5">
            <div className="row">
                <div className="col-md-9 col-lg-9 col-12">
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        {
                            students.map(stu =>
                                <Student
                                    key={stu.key}
                                    student={stu}
                                    handleButton={handleButton}
                                >

                                </Student>)
                        }
                    </div>
                </div>
                <div className="col-3 col-lg-3 col-12">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Students;