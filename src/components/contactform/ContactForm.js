import React,  { useState, useRef  }  from 'react';
import { useForm } from 'react-hook-form';
import './ContactForm.css';
import Button from '@mui/material/Button';
import CheckboxesGroup1 from './CheckboxesGroup1';



function ContactForm (props) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState(null);
  const formContainerRef = useRef(null);

  const onSubmit = (data) => {
    setFormData(data);
    setSubmitted(true);
    
    console.log(data); // フォームのデータを表示する例としてコンソールに出力します
  };

  const fixFromData = () => {
    props.setName(formData.name);
    props.setEmail(formData.email);
    props.setMassage(formData.message);
    //API提出フラグ
    props.setAPIsubmit(props.APIsubmit + 1)
    props.setShowThanksMessage(true);

  };

  // ContactForm上部に戻すonClick
  const handle1ButtonClick = () => {
    setSubmitted(false);
    setFormData(null);
    scrollToTop(formContainerRef);
  };
  // スクロールする関数
  const scrollToTop = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <div className="form-container" ref={formContainerRef}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* 名前 */}
        <div className='form'>
          <label htmlFor="name">名前　＊必須＊</label>
          {errors.name && <p className="error-message">名前を入力してください</p>}
          <input type="text" {...register("name", { required: true })} />
        </div>

        {/* メールアドレス */}
        <div className='form'>
          <label htmlFor="email">メールアドレス　＊必須＊</label>
          {errors.email && <p className="error-message">正しいメールアドレスを入力してください</p>}
          <input
            type="email"
            {...register("email", {
              required: true,
              pattern: /^\S+@\S+$/i,
            })}
          />
        </div>

        {/* アンケート：サービスの利用目的は何ですか？ */}
        <div className='form'>
          <CheckboxesGroup1 />
        </div>

        {/* 決済フォーム */}



        {/* フリーコメント */}
        <label htmlFor="message">メッセージ</label>
        <textarea {...register("message")} />
        {/* テキスト入力なしでエラー返す場合：{errors.message && <p className="error-message">メッセージを入力してください</p>} */}

        {/* 送信ボタン */}
        <Button variant="contained" type="submit">入力内容を確認する</Button>
      </form>

      {submitted && (
        <div className="hover-message">
          <p>以下の内容で送信しますか？</p>
          <p>名前: {formData.name}</p>
          <p>メールアドレス: {formData.email}</p>
          <p>メッセージ: {formData.message}</p>

          <p>プライバシーポリシーに同意して送信をします</p>
          <Button variant="contained" type="submit" onClick={() => fixFromData()}>送信する</Button> {/* App.js の　<ThanksMessage/>に飛ばしたい*/}
          <Button variant="contained" type="submit" onClick={handle1ButtonClick} >修正する</Button> {/* App.js の　<ThanksMessage/>に飛ばしたい*/}
        </div>
      )}
    </div>
  );
};

export default ContactForm;

