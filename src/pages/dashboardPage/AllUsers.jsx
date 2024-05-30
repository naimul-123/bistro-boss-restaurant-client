import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { FaTrash, FaUser, FaUsers } from 'react-icons/fa6';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data
        }
    })
    const handleUserRole = (id) => {


        axiosSecure.patch(`/users/admin/${id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount) {
                    Swal.fire({
                        title: "Success!",
                        text: "User has been made admin.",
                        icon: "success"
                    });
                    refetch();

                }
            })


    }
    const handleDeleteUser = (id) => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${id}`)
                    .then(res => {
                        if (res.data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "User has been deleted.",
                                icon: "success"
                            });
                            refetch();

                        }
                    })

            }
        });
    }
    return (
        <div>
            <div className='flex justify-evenly'>
                <h2 className="text-3xl">Manage All Users</h2>
                <h2 className="text-3xl">Total Users{users.length}</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead className='bg-[#D1A054]'>
                        <tr >
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, idx) => <tr key={user._id}>
                            <th>{idx + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td> {user.role === "Admin" ? <span className='text-success'>Admin</span> : <button className='btn bg-[#D1A054] text-white' onClick={() => handleUserRole(user._id)}><FaUsers /></button>} </td>
                            <td> <button className='btn btn-error text-white' onClick={() => handleDeleteUser(user._id)}><FaTrashAlt /></button> </td>
                        </tr>)}


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;