import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import useMenu from '../../hooks/useMenu';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { Link } from 'react-router-dom';

const ManageItems = () => {
    const [menu, loading, refetch] = useMenu()
    const info = {
        title: "Manage all Items",
        subTitle: "Hurry Up"
    }

    const axiosSecure = useAxiosSecure()


    const handleDeleteItem = (id) => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${id}`)
                if (res.data.deletedCount) {
                    refetch();
                    Swal.fire({
                        title: "Deleted!",
                        text: "Item has been deleted.",
                        icon: "success"
                    });
                }
            }
        });
    }
    const handleEditItem = (id) => {
        console.log(id);
    }
    return (
        <div>
            <SectionTitle info={info}></SectionTitle>
            <div>
                <div className="overflow-x-auto max-w-screen-md mx-auto">
                    <table className="table table-md ">
                        {/* head */}
                        <thead >
                            <tr className='bg-[#F3F3F3] rounded-full '>
                                <th>
                                    #
                                </th>
                                <th>Image</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {menu.map((item, idx) => <tr key={item._id}>
                                <th>
                                    {idx + 1}
                                </th>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>{item.name}</td>
                                <td className='text-right font-bold'>${item.price.toFixed(2)}</td>
                                <th>
                                    <Link to={`/dashboard/updateItem/${item._id}`} className="btn text-white bg-[#D1A054]"><FaEdit /></Link >
                                </th>
                                <th>
                                    <button className="btn text-white bg-[#B91C1C]" onClick={() => handleDeleteItem(item._id)}><FaTrashAlt /></button>
                                </th>
                            </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageItems;