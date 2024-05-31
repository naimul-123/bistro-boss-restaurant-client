import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";


const PaymentHistory = () => {

    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    // useEffect(() => {
    //     axiosSecure.get(`/payments/${user?.email}`)
    //         .then(res => console.log(res.data))

    // }, [axiosSecure, user?.email])

    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user?.email}`);
            return res.data;
        }
    });
    console.log(payments);

    return (
        <div>
            <h2 className="text-3xl">Total Payments: {payments.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Price</th>
                            <th>Transaction Id</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payments.map((payment, index) => (
                            <tr key={payment._id} className="bg-base-200">
                                <th>{index + 1}</th>
                                <td>${payment.price}</td>
                                <td>{payment.transectionId}</td>
                                <td>{payment.status}</td>

                            </tr>)
                        )}


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;