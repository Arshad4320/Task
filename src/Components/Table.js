import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Table = () => {

const [data,setData]=useState([]);
console.log(data);
useEffect(()=>{
    fetch('table.json')
    .then(res=>res.json())
    .then(data=>setData(data))
},[])  

    return (
       <div>
            <div>
                <h2 className='text-2xl font-bold my-10'>Part-1</h2>
            </div>
            <div>
                <div className="overflow-x-auto w-5/6 mx-auto">
                    <table className="table w-full">
                       
                        <thead>
                            <tr>
                                
                                <th>Name</th>
                                <th>City</th>
                                <th>Email Address</th>
                                <th>Joining Date</th>
                                <th>Role</th>
                            </tr>
                        </thead>
                        <tbody>
                         
                           {
                            data.map(data=><tr key={data.id}>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={data.person.avatar} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        
                                    </div>
                                </td>
                                <td>{data.person.name}</td>
                                 <td>{data.email}</td>
                                <td>{data.joiningDate}</td>
                                <td>{data.role}</td>
                            </tr>)
                           }
                           
                        </tbody>

                    </table>
                </div>
            </div>
       </div>
    );
};

export default Table;