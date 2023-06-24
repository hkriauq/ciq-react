import './App.css';
import ContactForm from './components/contactform/ContactForm';
import Farms from './components/farms/Farms';
import Timer from './components/timer/Timer';
import Questions from './components/questions/Questions';
import Recording from './components/recording/Recording';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <link
        rel="./App.css"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
        <h2>ケース面接Quest </h2>
        <p>ケース面接の練習ができるアプリです。(https://caseinterviewquest.jp/top)</p>
        <p>パソコンおよび安定した通信環境での実施を推奨します</p>
        <p>利用手順</p>
        <p>【進め方】</p>
        <ol>
          <li>問題を選択して「検討を開始する」ボタンを押す</li>
          <li>5分間で検討する</li>
          <li>回答を録音する</li>
        </ol>
        <p>【フィードバックを希望する場合】</p>
        <ol>
          <li>必要情報を入力して申し込み</li>
          <li>申し込み後、決済メールが届く→→リンクから決済</li>
          <li>フィードバックシート・録音のテキストデータをメールで送付（決済完了後5日以内に送付）</li>
        </ol>
      </header>
      <body>
        {/* ファームセレクト */}
        <div style={{textAlign: 'center'}}>
          <p>練習したいファーム種別を選んでください</p>
          < Farms />
        </div>

        {/* 問題セレクト */}
        <div style={{textAlign: 'center'}}>
          <p>問題を選択してください</p>
          < Questions />
        </div>

        {/* 設問を表示・検討開始 */}
        <div style={{textAlign: 'center'}}>
          <p>【問題】</p>
          <p>国内の腕時計の市場規模を簡易的に推定の上、市場の拡大施策を考えてください</p> {/* onClickに差替 */}
           <Timer /> {/* onClickでボタンを押した瞬間にカウント開始に設定する */}
        </div>

        {/* 録音開始 */}
        <div style={{textAlign: 'center'}}>
          <p>回答の録音を開始してください</p>
          <p>制限時間：５分</p>
          <Timer />
          <Recording />
        </div>

        {/* 録音の確認・提出 */}
        <div style={{textAlign: 'center'}}>
          <p>回答を確認して問題なければ提出ボタンを押してください</p>
          <p>録音に問題があった場合、再度実施することができます</p>

           {/* 戸沢さんのjs */}

        </div>


        {/* アンケート */}



        {/* 入力フォーム */}
        
        <div style={{textAlign: 'center'}}>
          <p>フィードバックを希望する方は下記よりお申し込みください</p>
          <ContactForm />
        </div>

        {/* 決済 */}


        {/* TOPに戻る */}
      

      </body>
    </div>
  );
}

export default App;

