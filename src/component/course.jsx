import Header from "./header"
function Course(){
    return(
        <div>
            <Header />
            <div className="middle-wrapper">
                <div className="content">
                        <h1>授業</h1>
                        <div className="clip-box-a">
                            現在公開中の授業はありません。<br/>
                            次の授業の公開予定日　➡　2021年11月5日（金）
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
export default Course