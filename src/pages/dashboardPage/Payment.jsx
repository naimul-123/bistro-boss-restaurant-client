import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../components/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";
// Todo: add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GETWAY_KEY)

const Payment = () => {
    const info = {
        title: "Payment",
        subTitle: "Please Pay to eat"
    }
    return (
        <div>
            <SectionTitle info={info}></SectionTitle>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckOutForm></CheckOutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;