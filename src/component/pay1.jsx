import Header from "./header"
import StripeContainer from "./payment/StripeContainer"
import {useState} from "react"
import Axios from "axios"
import {useLocation} from "react-router-dom"
function Pay1(){
    const amount=3000
    const [page,setPage]=useState("1")
    const [name,setName]=useState("")
    const [customerId,setCustomerId]=useState("")
    const {state}=useLocation()

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
    const completePay1=()=>{
        setPage("3")
        Axios.post("https://rapid-kagoshima-9161.lolipop.io/completePay1",{
            id:state.id,
            name:name,
            customerId:customerId,
            month:state.month,
            day:state.day,
            date:state.date,
            time:state.time
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
                        <StripeContainer completePay={completePay1} amount={amount}/>
                    </div>
    }else{
        currentPage=<div>
            <h3>【予約日時】</h3>
            <h3>{state.month}月{state.day}日 {state.time}時から</h3>
            <h3>お支払いが完了しました</h3>
            </div>
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
export default Pay1