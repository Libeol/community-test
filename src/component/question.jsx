import Header from "./header"
import {useState} from "react"
import Axios from "axios"
function Question(){
    const [isSubmited,setIsSubmited]=useState(false)
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [question,setQuestion]=useState("")

    const submitForm=()=>{
        Axios.post("https://rapid-kagoshima-9161.lolipop.io/submitForm",{
            name:name,
            email:email,
            question:question
        })
        setIsSubmited(true)
    }
    return(
        <div>
            <Header />
            <div className="middle-wrapper">
                <div className="content">
                    <h1>お問い合わせ</h1>
                    <div className="clip-box-a">
                        {isSubmited 
                        ?
                        <div className="form">
                            <h3>送信完了</h3>
                            <h3>ご質問ありがとうございました。</h3>
                        </div>
                        :
                        <div className="form">
                            <form onSubmit={submitForm}>
                                <label>お名前</label>
                                <br/>
                                <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} required/>
                                <br/>
                                <label>メールアドレス</label>
                                <br/>
                                <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} required/>
                                <br/>
                                <label>ご質問</label>
                                <br/>
                                <textarea value={question} onChange={(e)=>{setQuestion(e.target.value)}} required/>
                                <br/>
                                <button type="submit">送信</button>
                            </form>
                        </div>
                        }   
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
export default Question