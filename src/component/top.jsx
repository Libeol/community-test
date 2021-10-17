import Header from "./header"
import Image1 from "./images/1.jpg"
import Image2 from "./images/4.PNG"
import Image3 from "./images/5.png"
import Image4 from "./images/6.png"
import Image5 from "./images/7.png"
import Image6 from "./images/9.jpg"
import Image7 from "./images/3.PNG"




function Top(){
    return(
        <div>
            <Header />
            <div className="top-wrapper">
                <img className="top-logo" alt="" src={Image2}/>
                <img className="top-logo2" alt="" src={Image7}/>
                <img className="top-img" alt="" src={Image1}/>
                <img className="top-img2" alt="" src={Image6}/>
            </div>
            <div className="middele-wrapper">
                <div className="content">
                    <h1>お知らせ</h1>
                    <div className="clip-box-a">
                        ・活動開始は11月5日です。<br/>
                        ・受講生が想定よりも多かったので、Zoomによるリアルタイムの授業ではなく動画での授業となります。<br/>
                        ・11月5日（金）の19時に最初の動画を公開します。<br/>
                        ・その後毎週金曜日に動画を公開していきます。
                    </div>
                </div>
            
                <div className="content">
                    <h1>Libeolコミュニティ</h1>
                    <div className="clip-box-a">
                        LibeolコミュニティはReact.jsとNode.jsを多くの人に知ってもらって、
                        日本でのReact.jsとNode.jsの人気を高めることを目的としています。
                        皆さんには簡単なチャットアプリの制作を目標として、これらと触れ合っていただければと思います。
                        そして皆さんがより多くのエンジニアに広めていただければなと思います。
                    </div>
                </div>

                <div className="content">
                    <h1>目標</h1>
                    <div className="clip-box-a">
                        <div className="sentence1">
                            このコミュニティではInstagramやNetflixなどの世界の大企業も愛用しているReactと、
                            Node.jsを簡単なチャットアプリを作れるようになることを目標としています。
                            ちなみにNetflixはフロントエンドはReact、バックエンドはNode.jsで書かれているんですよ。
                            そんな方法でアプリケーションやサービスを作って見たいと思いませんか？
                            <br/>
                            Reactの基礎、Node.jsの基礎から丁寧に教えていきます！
                            だからReactとNode.jsの事前知識は全く必要ありません。
                            必要なのはチャットアプリが作りたいという気持ちだけです！
                            本当にそれだけで十分です！
                            コミュニティで仲間たちと学んだり教えあったりして、みんなでこれらを習得していきましょう！
                            この３か月が皆さんのエンジニアとしてのキャリアの役に立つことを祈っています。
                        </div>
                        <img className="image1" src={Image3} alt="" />
                        <div className="clear"></div>
                        <div className="clear-right"></div>
                    </div>
                </div>

                <div className="content">
                    <h1>自己紹介</h1>
                    <div className="clip-box-a">
                        <img className="image2" src={Image4} alt="" />
                        <div className="sentence2">
                            <h2>塚上賢太</h2>
                            <h6>名古屋大学３年</h6>
                        </div>
                        <div className="clear"></div>
                        <p className="sentence-s">2021年7月よりHTML＆CSS、Node.jsの勉強開始。
                                その後Reactに出会い、Node.jsとの連携を独学。
                                そして9月に初案件獲得。（バックエンドエンジニア）
                        </p>

                    </div>
                    <div className="clip-box-a">
                    <img className="image2" src={Image5} alt="" />
                        <div className="sentence2">
                            <h2>平野学宜</h2>
                            <h6>名古屋大学２年</h6>
                        </div>
                        <div className="clear"></div>
                        <p className="sentence-s">Unity、Ruby on Rails、html、css、React等々ウェブからゲームまで幅広い開発を行っている。
                                React独学後１か月後に実務をこなす。
                        </p>
                        
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
export default Top