import React,  { useState, useRef  }  from 'react';
import { useForm } from 'react-hook-form';
import './ContactForm.css';
import Button from '@mui/material/Button';
import CheckboxesGroup1 from './CheckboxesGroup1';
import CheckboxesGroup2 from './CheckboxesGroup2';
import CheckboxesGroup3 from './CheckboxesGroup3';
import CheckboxesGroup4 from './CheckboxesGroup4';

function ContactForm () {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState(null);
  const formContainerRef = useRef(null);

  const onSubmit = (data) => {
    setFormData(data);
    setSubmitted(true);
    console.log(data); // submitの内容を出力
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

        {/* アンケート：フィードバックを希望しますか？ */}
        <div className='form'>
          <CheckboxesGroup2 />
        </div>

        {/* アンケート：本サービスをどこで知りましたか？ */}
        <div className='form'>
          <CheckboxesGroup3 />
        </div>

        {/* アンケート：インタビューにご協力いただけますか？ */}
        <div className='form'>
          <CheckboxesGroup4 />
        </div>

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
          <Button variant="contained" type="submit">送信する</Button> {/* App.js の　<ThanksMessage/>に飛ばしたい*/}
          <Button variant="contained" type="submit" onClick={handle1ButtonClick} >修正する</Button> {/* App.js の　<ThanksMessage/>に飛ばしたい*/}
        </div>
      )}
      
    </div>
  );
};

export default ContactForm;
