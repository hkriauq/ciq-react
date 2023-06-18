import './App.css';
import Farms from './components/farms/Farms';
import ContactForm from './components/contactform/ContactForm';
import Questions from './components/questions/Questions';
import Recording from './components/Recording/Recording';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <link
        rel="./App.css"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
        <h2>ケース面接Quest </h2>
        <h4>ケース面接の練習ができるアプリです。(https://caseinterviewquest.jp/top)</h4>
        <h6>パソコンおよび安定した通信環境での実施を推奨します</h6>
        <h6>利用手順</h6>
        <h6>① 「さっそくTry!」ボタンを押してください</h6>
        <h6>② 練習したいファーム種別と問題を選択して「検討を開始する」ボタンを押してください</h6>
        <h6>③ 5分間の検討時間の後、回答（音声録音）に移行します</h6>
        <h6>④ 録音アイコンをクリックして回答を録音してください</h6>
        <h6>⑤ Feedbackを希望する場合、「Feedbackを希望する」を選択して「Submit」ボタンを押してください </h6>
        <h6>⑥ 表示される決済リンクから決済を行ってください</h6>
        <h6>① 「さっそくTry!」ボタンを押してください</h6>
        <h6>⑦ 決済完了後5日以内に、Feedbackシート・録音データをメールにて送付します</h6>
      </header>


      {/* ファームセレクト */}
      < Farms />

      {/* 問題セレクト */}
      < Questions />

      {/* 設問を表示 */}

      {/* 検討開始 */}

      {/* 録音開始 */}
      <Recording/>
      {/* アンケート */}

      {/* 入力フォーム */}
      < ContactForm />

      {/* 決済 */}


      {/* TOPに戻る */}

    </div>
  );
}

export default App;
