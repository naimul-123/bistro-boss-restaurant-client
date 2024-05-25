

import Swal from 'sweetalert2';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const FoodCard = ({ item }) => {
    const { name, image, price, recipe } = item;
    const { user } = useAuth();
    const navigate = useNavigate();
    const handleAddToCart = (food) => {
        if (user?.email) {
            console.log(food);
        }
        else {
            Swal.fire({
                title: "You are not loged in!",
                text: "Please login to add to cart!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Log in!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login')
                }
            });
        }

    }
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
                <figure><img src={image} alt={name} className='w-full' /></figure>
                <p className='bg-slate-900 text-white absolute mr-4 mt-4 right-0 p-2'>${price}</p>
                <div className="card-body items-center text-center ">

                    <h2 className="card-title">{name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions">
                        <button
                            onClick={() => handleAddToCart(item)}
                            className="btn btn-outline bg-[#E8E8E8] text-[#BB8506] border-[#BB8506] uppercase hover:text-[#BB8506] border-0 border-b-4">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;