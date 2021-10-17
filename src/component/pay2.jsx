import Header from "./header"
import StripeContainer from "./payment/StripeContainer"
import {useState} from "react"
import Axios from "axios"
function Pay2(){
    const amount=10000
    const [page,setPage]=useState("1")
    const [name,setName]=useState("")
    const [customerId,setCustomerId]=useState("")

    const auth=(e)=>{
        e.preventDefault()
        Axios.post("https://rapid-kagoshima-9161.lolipop.io/auth",{
            customerId:customerId
        }).then((response)=>{
            if(response.data.auth){
                setPage("2")
            }else{
                alert("この会員IDは登録されていません。")
            }
        })
    }
    const completePay2=()=>{
        setPage("3")
        Axios.post("https://rapid-kagoshima-9161.lolipop.io/completePay2",{
            name:name,
            customerId:customerId,
        })
    }

    let currentPage
    if(page==="1"){
        currentPage=<div className="form2">
                        <form　onSubmit={auth}>
                            <label>お名前</label>
                            <br/>
                            <input type="text" values={name} onChange={(e)=>{setName(e.target.value)}} required/>
                            <br/>
                            <label>会員ID</label>
                            <input type="text" values={customerId} onChange={(e)=>{setCustomerId(e.target.value)}} required/>
                            <button type="submit">決定</button>
                        </form>
                    </div> 
    }else if(page==="2"){
        currentPage=<div className="pay-container">
                        <StripeContainer completePay={completePay2} amount={amount}/>
                    </div>
    }else{
        currentPage=<h3>お支払いが完了しました。</h3>
    }
    return(
        <div>
            <Header />
            <div className="middle-wrapper">
                <div className="content">
                    <h1>決済</h1>
                    <div className="clip-box-a">
                        {currentPage}
                    </div>
                </div>
            </div>
            <div className="footer">
                <p>
                    Copyright &copy; Libeol. All Right Reserved.
                </p>
            </div>
        </div>
    )
}
export default Pay2