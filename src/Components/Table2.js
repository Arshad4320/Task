import React, { useEffect, useState } from 'react';

const Table2 = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('table.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])  
    return (
        <div>
            <div>
                <h2 className='text-2xl font-bold mt-10 mb-5'>Part-2</h2>
            </div>
            <div>

                <div className="overflow-x-auto w-3/4 mx-auto ">
                    <table className="table w-full">
                     
                        <thead>
                            <tr>
                               
                                
                                <th>Email Address</th>
                                <th>Joining Date</th>
                                <th>Role</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                    {
                        data.map(option=><tr kye={option.id}>
                           
                           
                            <td>{option.email}</td>
                            <td>{option.joiningDate}</td>
                            <td>{option.role}</td>
                        </tr>)
                    }
                        </tbody>
                    </table>
                </div>
            </div>

            <div>

                <div className="overflow-x-auto mt-10 w-3/4 mx-auto">
                    <table className="table w-full">

                        <thead>
                            <tr>

                                <th>Name</th>
                                <th>Email Address</th>
                                <th>Role</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map(option => <tr key={option.id}>

                                    <td>{option.person.name}</td>
                                    <td>{option.email}</td>
                                    <td>{option.role}</td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Table2;