import { FaGoogle } from "react-icons/fa6";
import useAuth from "../hooks/useAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogIn = () => {
    const { googleSignIn } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/"
    const handleGoogleSingIn = () => {
        googleSignIn()
            .then(result => {
                if (result.user) {
                    const userInfo = {
                        name: result.user.displayName,
                        email: result.user.email
                    }

                    axiosPublic.post('/users', userInfo)
                        .then(res => {
                            console.log(res.data);
                            if (res.data.insertedId) {

                                Swal.fire({
                                    title: "Signed Up!",
                                    text: "Successfully Signed Up",
                                    icon: "success"
                                });
                                navigate(from, { replace: true })
                            }
                        })

                }
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <div className="divider"></div>
            <div className="flex flex-col justify-center items-center p-8">
                <button className="btn inline-flex items-center" onClick={handleGoogleSingIn}>
                    <FaGoogle className="text-yellow-500"></FaGoogle>
                    google
                </button>
            </div>
        </div>
    );
};

export default SocialLogIn;