import {memo} from "react"
import { useHistory , Link } from "react-router-dom"

const Header=memo(()=>{
    const history=useHistory()
    return(
        <div className="header">
                <ul className="pc-menu">
                    <li className="list1"><p onClick={()=>{history.push("/community-test")}}>トップ</p></li>
                    <li className="list1"><p onClick={()=>{history.push("/community-test/course")}}>授業</p></li>
                    <li className="list1"><p onClick={()=>{history.push("/community-test/reservation")}}>予約・申し込み</p></li>
                    <li className="list2"><p onClick={()=>{history.push("/community-test/question")}}>お問い合わせ</p></li>
                    <div className="clear"></div>                
                </ul>
                <input className="hamberger" type="checkbox" id="hamburger" />
                <label htmlFor="hamburger" className="hamberger-label">
                    <span>
                    <i></i>
                    <i></i>
                    <i></i>
                    </span>
                </label>

                <nav className="hamburger-list">
                    <div className="hamburger-list__wrap">
                    <ul>
                        <li><Link to="/community-test">トップ</Link></li>
                        <li><Link to="/community-test/course">授業</Link></li>
                        <li><Link to="/community-test/reservation">予約＆申し込み</Link></li>
                        <li><Link to="/community-test/question">お問い合わせ</Link></li>
                    </ul>
                    </div>
                </nav>
        </div>
    )
})
export default Header