import { useElements,useStripe,CardNumberElement, CardExpiryElement, CardCvcElement} from "@stripe/react-stripe-js"
import {useState} from "react"
import Axios from "axios"
import Image1 from "../images/8.gif"
const CARD_OPTIONS = {
	iconStyle: "solid",
	style: {
		base: {
			iconColor: "#c4f0ff",
			color: "rgb(0, 55, 107)",
			fontWeight: 500,
			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
			fontSize: "16px",
			fontSmoothing: "antialiased",
			":-webkit-autofill": { color: "black" },
			"::placeholder": { color: "#92ccff" }
		},
		invalid: {
			iconColor: "#ffc7ee",
			color: "#ffc7ee"
		}
	}
}

function PaymentForm(props){
    const {amount,completePay}=props
    const [load,setLoad]=useState(false)
    const stripe=useStripe()
    const elements=useElements()


    const handleSubmit=async(e)=>{
        e.preventDefault()
        console.log(elements.getElement(CardNumberElement))
        const {error,paymentMethod}=await stripe.createPaymentMethod({
            type:"card",
            card:elements.getElement(CardNumberElement)
        })
        setLoad(true)
        if(!error){
            try{
                const {id} = paymentMethod
                const response=await Axios.post("https://rapid-kagoshima-9161.lolipop.io/payment",{
                    amount:amount,//<=金額
                    id:id
                })

                if(response.data.success){
                    completePay()
                    setLoad(false)
                }
            }catch(error){
                alert("Error",error)
                setLoad(false)
            }
        }else{
            alert(error.message)
            setLoad(false)
        }
    }
    return(
        <>
        {load
        ?
        <img alt="" src={Image1} className="load-image"/>
        :
        <form onSubmit={handleSubmit}>
            <div className="FormRow">
                <label>カード番号</label>
                <br/>
                <CardNumberElement options={CARD_OPTIONS} className="Form"/>
                <label>有効期限</label>
                <CardExpiryElement  className="Form"/>
                <label>セキュリティーコード</label>
                <CardCvcElement  className="Form"/>
            </div>

            <button>支払い</button>
        </form>
        }
        </>
    )
}
export default PaymentForm