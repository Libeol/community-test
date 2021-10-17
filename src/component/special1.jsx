import { useEffect ,useState} from "react"
import {useHistory} from "react-router-dom"
import Header from "./header"
import Axios from "axios"
import Image1 from "./images/10.gif"
function Special1(){
    const [load,setLoad]=useState(true)
    const history=useHistory()
    const [schedule,setSchedule]=useState([])

    useEffect(()=>{
        Axios.get("https://rapid-kagoshima-9161.lolipop.io/getschedule").then((response)=>{
            setSchedule(response.data)
            setTimeout(()=>{
                setLoad(false)
            },1000)
        })
    },[])

    return(
        <div>
            <Header />
            <div className="middle-wrapper">
                <div className="content">
                    <h1>日程を選ぶ</h1>
                    <div className="clip-box-a">
                        {load
                        ?
                        <img alt="" src={Image1} className="load-image"/>
                        :
                        <>
                        {schedule.map((data,index)=>{
                            let yobi;
                            if(data.date===1){
                                yobi="月"
                            }else if(data.date===2){
                                yobi="火"
                            }else if(data.date===3){
                                yobi="水"
                            }else if(data.date===4){
                                yobi="木"
                            }else if(data.date===5){
                                yobi="金"
                            }else if(data.date===6){
                                yobi="土"
                            }else if(data.date===7){
                                yobi="日"
                            }
                            return(
                                <div　className="day" key={index}>
                                    <h3>{data.month}月{data.day}日({yobi})/{data.time}時から{data.time+1}時まで
                                    {data.book===1 ?
                                    <label>×満席</label>
                                    :
                                    <label>〇空席</label>
                                    }
                                    </h3>
                                    {data.book ?
                                    <button onClick={()=>{alert("申し訳ございません。この日程は満席です。")}}>予約できません</button>
                                    :
                                    <button onClick={()=>{history.push({pathname:"/community-test/reservation/pay1",state:data})}}>予約する</button>
                                    }
                                </div>
                            )
                        })} 
                        </>
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
export default Special1