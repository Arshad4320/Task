import React, { useState } from 'react';
import { useEffect } from 'react';

const Table3 = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('table.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <div>
            <div>
                <h2 className='text-2xl font-bold mt-10 mb-5'>Part-3</h2>
            </div>
            <div>

                <div className="overflow-x-auto w-5/6 mx-auto ">
                    <table className="table w-full">

                        <thead>
                            <tr>


                                <th>Name</th>
                                <th>City</th>
                                <th>Joining Date</th>
                                <th>Role</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map(option => <tr key={option.id}>


                                    <td>{option.person.name}</td>
                                    <td>{option.city}</td>
                                    <td>{option.joiningDate}</td>
                                    <td>{option.role}</td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>

            <div>
            </div>
        </div>
    );
};

export default Table3;