import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import ContactForm from './components/contactform/ContactForm';
import CustomTimer from './components/customtimer/CustomTimer';
import Recording from './components/recording/Recording';
import Button from '@mui/material/Button';
import SelectFarms from './components/questions/SelectFarms';
import SelectQuestions from './components/questions/SelectQuestions';
import ThanksMessage from './components/contactform/ThanksMessage';


function App() {
  // 選択された項目の初期設定（プルダウンをnullにしておく）
  const [selectedFarm, setSelectedFarm] = useState(null);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  // 問題選択パートの表示
  const [showSelectQuestions, setSelectQuestions] = useState(false);
  const selectQuestionsRef = useRef(null);
  const handle1ButtonClick = () => {
    setSelectQuestions(true);
    scrollToTop(selectQuestionsRef);
  };
  // 検討パートの表示
  const [showConsideration, setShowConsideration] = useState(false);
  const considerationRef = useRef(null);
  const handle2ButtonClick = () => {
    setShowConsideration(true);
    scrollToTop(considerationRef);
  };
  // 録音パートの表示
  const [showRecording, setShowRecording] = useState(false);
  const recordingRef = useRef(null);
  const handle3ButtonClick = () => {
    setShowRecording(true);
    setConfirmRecording(false); 
    scrollToTop(recordingRef);
  };
  // 録音確認パートの表示
  const [showConfirmRecording, setConfirmRecording] = useState(false);
  const confirmRecordingRef = useRef(null);
  const handle4ButtonClick = () => {
    setConfirmRecording(true);
    scrollToTop(confirmRecordingRef);
  };
  // 提出パートの表示
  const [showContactForm, setContactForm] = useState(false);
  const contactFormRef = useRef(null);
  const handle5ButtonClick = () => {
    setContactForm(true);
    scrollToTop(contactFormRef);
  };
  // ThanksMessageの表示
  const [showThanksMessage, setThanksMessage] = useState(false);
  const thanksMessageRef = useRef(null);
  const handle6ButtonClick = () => {
    setThanksMessage(true);
    scrollToTop(thanksMessageRef);
  };
  // スクロールする関数
  const scrollToTop = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  //スクロール処理
  useEffect(() => {
    if (showSelectQuestions) {
      scrollToTop(selectQuestionsRef);
    }
  }, [showSelectQuestions]);
  useEffect(() => {
    if (showConsideration) {
      scrollToTop(considerationRef);
    }
  }, [showConsideration]);
  useEffect(() => {
    if (showRecording) {
      scrollToTop(recordingRef);
    }
  }, [showRecording]);
  useEffect(() => {
    if (showConfirmRecording) {
      scrollToTop(confirmRecordingRef);
    }
  }, [showConfirmRecording]);
  useEffect(() => {
    if (showContactForm) {
      scrollToTop(contactFormRef);
    }
  }, [showContactForm]);
  useEffect(() => {
    if (showThanksMessage) {
      scrollToTop(thanksMessageRef);
    }
  }, [showThanksMessage]);


  return (
    <div class="App">
      <header className="App-header">
        <h2>ケース面接Quest </h2>
        <h5>パソコンおよび安定した通信環境での実施を推奨します</h5>
        <div className="how-to-use">
          <p>【進め方】</p>
          <ol>
            <li>問題を選択する</li>
            <li>5分間で検討する</li>
            <li>5分間で回答を録音する</li>
            <li>回答を確認する</li>
            <li>フィードバックを申し込む</li>
          </ol>
        </div>
        <div className="button-container">
          <Button variant="outlined"> 使い方を確認する </Button>
          <Button variant="contained" onClick={handle1ButtonClick}> さっそくTry! </Button>
        </div>
      </header>



      <body className="App-body">

        {/* 問題選択パート */}
        <div className="questions" ref={selectQuestionsRef}>
          {showSelectQuestions ? (
            <div className="questions-container">
              <p>練習したいファーム種別を選んでください</p>
              <SelectFarms  onChange={setSelectedFarm} />
              <p>問題を選んでください</p>
              <SelectQuestions onChange={setSelectedQuestion} />
              <div className="button-container">
                <Button variant="contained" onClick={handle2ButtonClick}>
                    検討を開始する
                </Button>
              </div>
            </div>
          ) : (
            <div>1 : 問題を選ぶ</div>
          )}
        </div>

        {/* 検討パート */}
        <div className="consideration" ref={considerationRef}>
          {showConsideration ? (
            <div className="consideration-container">
              <p>【問題】</p>
              <p>国内の腕時計の市場規模を簡易的に推定の上、市場の拡大施策を考えてください</p> {/* onChange・propsに差替 */}
              <p>5秒後にカウントダウンが開始します</p>
              <CustomTimer className="custom-timer" initialTime={5 * 60} autoStartDelay={5} />
              <Button variant="outlined" onClick={handle3ButtonClick}>スキップする</Button>
            </div>
          ) : (
            <div>2 : 5分間で検討をする</div>
          )}
        </div>

        {/* 録音パート */}
        <div className="recording" ref={recordingRef}>
          {showRecording ? (
            <div className="recording-container">
              <p>回答の録音を開始してください</p>
              <p>制限時間：５分</p>
              <p>5秒後にカウントダウンが開始します</p>
              <CustomTimer className="custom-timer" initialTime={5 * 60} autoStartDelay={5}/>
              <Recording />
              <div className='button-container'>
                <Button variant="contained" onClick={handle4ButtonClick}> 回答を確認する </Button>
              </div>
            </div>
          ) : (
            <div>3 : 5分間で回答を録音する</div>
          )}
        </div>


        {/* 録音の確認・提出 */}
        <div className="confirm-recording" ref={confirmRecordingRef}>
         {showConfirmRecording ? (
            <div className="confirm-recording-container">
              <p>回答を確認して問題なければ提出ボタンを押してください</p>
              <p>録音に問題があった場合、再度実施することができます</p>
              <Recording />
              <div className="button-container">
                <Button variant="contained" onClick={handle5ButtonClick}> 回答を提出する </Button>
                <Button variant="outlined" onClick={handle3ButtonClick}> 再度回答する </Button>
                <Button variant="outlined" onClick={handle6ButtonClick}> 回答せずに終了する </Button>
              </div>
            </div>
          ) : (
            <div>4 : 回答を確認する</div>
          )}
        </div>

        {/* フィードバック申し込みフォーム */}
        <div className="submit-answer" ref={contactFormRef}>
        {showContactForm ? (
            <div>
              <p>フィードバックを希望する方は下記よりお申し込みください</p>
              <ContactForm />
              {/* アンケート */}
            </div>
          ) : (
            <div>5 : フィードバックを申し込む</div>
          )}
        </div>


        {/* 決済 */}


        {/* ThanksMessage */}
        <div className="thanks-message" ref={thanksMessageRef}>
         {showThanksMessage ? (
            <div>
                <ThanksMessage/>
            </div>
          ) : (
            <div>6 : 終了！</div>
          )}
        </div>


        {/* TOPに戻る */}
        <div className="back-to-top">
          <Button variant="outlined" onClick={() => scrollToTop(window)} type="button">
            TOPに戻る
          </Button>
        </div>
        
      </body>
    </div>
  );
}

export default App;

