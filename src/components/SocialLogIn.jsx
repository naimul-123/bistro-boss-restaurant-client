import { FaGoogle } from "react-icons/fa6";

const SocialLogIn = () => {
    return (
        <div>
            <div className="divider"></div>
            <div className="flex flex-col justify-center items-center p-8">
                <button className="btn inline-flex items-center">
                    <FaGoogle className="text-yellow-500"></FaGoogle>
                    google
                </button>
            </div>
        </div>
    );
};

export default SocialLogIn;