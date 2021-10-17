import {useHistory} from "react-router-dom"
import Header from "./header"
function Reservation(){
    const history=useHistory()
    return(
        <div>
            <Header />
            <div className="middle-wrapper">
                <div className="content">
                    <h1>予約＆申し込み</h1>
                    <div className="clip-box-a">
                        <h3>■特別授業</h3>
                        <p>公開授業とは別に公開授業とは別にマンツーマンでの授業を提供します。
                            内容があまり理解出来なかった方、モチベーション維持が難しい方におすすめです。
                            さら公開授業の進行よりも先の内容を受けることも可能です。
                        </p>
                        <h4>料金：1時間3,000円</h4>
                        <div className="btn-wrapper">
                            <button onClick={()=>{history.push("/community-test/reservation/special-lesson")}}>特別授業を予約する</button>
                        </div>  
                    </div>
                    <div className="clip-box-a">
                        <h3>■特別サポート</h3>
                        <p>毎週課題や勉強する場所を指示します。
                            さらにマンツーマン授業を月に5時間受けられます。
                        </p>
                        <h4>料金：月々10,000円</h4>
                        <div className="btn-wrapper">
                            <button onClick={()=>{history.push("/community-test/reservation/pay2")}}>特別サポートに申し込む</button>
                        </div>  
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
export default Reservation