import React, { useState } from 'react';
import './App.css';
import ContactForm from './components/contactform/ContactForm';
import CustomTimer from './components/customtimer/CustomTimer';
import Recording from './components/recording/Recording';
import Button from '@mui/material/Button';
import SelectFarms from './components/questions/SelectFarms';
import SelectQuestions from './components/questions/SelectQuestions';


function App() {
  const [showRecording, setShowRecording] = useState(false);
  const handleTryButtonClick = () => {
    setShowRecording(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <h2>ケース面接Quest </h2>
        <p>ケース面接の練習ができるアプリです。(https://caseinterviewquest.jp/top)</p>
        <p>パソコンおよび安定した通信環境での実施を推奨します</p>
        <p>【進め方】</p>
        <ol>
          <li>問題を選択して「検討を開始する」ボタンを押す</li>
          <li>5分間で検討する</li>
          <li>回答を録音する</li>
          <li>フィードバックを申し込む</li>
        </ol>
      </header>

      <div className="button1">
        <Button variant="outlined"> 使い方を確認する </Button>
        <Button variant="contained" onClick={handleTryButtonClick}> さっそくTry! </Button>
      </div>


      <body className="App-body">

        {/* 録音開始 */}
        <div className="Recording">
          {showRecording ? (
            <div>
              <p>回答の録音を開始してください</p>
              <p>制限時間：５分</p>
              <CustomTimer />
              <Recording />
            </div>
          ) : (
            <div></div>
          )}

          {/* ファーム・問題セレクト */}
          <div className="questions">
            <p>問題を選んでください</p>
              <SelectFarms />
              <SelectQuestions />
            <div className="button2">
             <Button variant="contained"> 検討を開始する </Button>
            </div>
          </div>

          {/* 設問を表示・検討開始 */}
          <div className="consideration">
            <p>【問題】</p>
            <p>国内の腕時計の市場規模を簡易的に推定の上、市場の拡大施策を考えてください</p> {/* onClickに差替 */}
              <CustomTimer /> {/* onClickでボタンを押した瞬間にカウント開始に設定する */}
            <div className="button3">
             <Button variant="outlined"> スキップ </Button>
            </div>
          </div>



          {/* 録音の確認・提出 */}
          <div className="recording-submit">
            <p>回答を確認して問題なければ提出ボタンを押してください</p>
            <p>録音に問題があった場合、再度実施することができます</p>
            {/* 戸沢さんのjs */}
            <div className="button5">
              <Button variant="contained"> 回答を提出する </Button>
              <Button variant="outlined"> 再度回答する </Button>
              <Button variant="outlined"> 回答せずに終了する </Button>
            </div>
          </div>


          {/* フィードバック申し込みフォーム */}
          <div className="feedback-submit">
            <p>フィードバックを希望する方は下記よりお申し込みください</p>
            <ContactForm />
            {/* アンケート */}
          </div>

          {/* 決済 */}

          {/* TOPに戻る */}

        </div>
      </body>
    </div>
  );
}

export default App;