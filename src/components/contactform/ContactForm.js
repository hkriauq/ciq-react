import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './ContactForm.css';

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState(null);

  const onSubmit = (data) => {
    setFormData(data);
    setSubmitted(true);
    console.log(data); // フォームのデータを表示する例としてコンソールに出力します
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">名前</label>
        <input type="text" {...register("name", { required: true })} />
        {errors.name && <p className="error-message">名前を入力してください</p>}

        <label htmlFor="email">メールアドレス</label>
        <input
          type="email"
          {...register("email", {
            required: true,
            pattern: /^\S+@\S+$/i,
          })}
        />
        {errors.email && <p className="error-message">正しいメールアドレスを入力してください</p>}

        <label htmlFor="message">メッセージ</label>
        <textarea {...register("message", { required: true })} />
        {errors.message && <p className="error-message">メッセージを入力してください</p>}

        <button type="submit">送信</button>
      </form>

      {submitted && (
        <div className="hover-message">
          <p>以下の内容で送信しますか？</p>
          <p>名前: {formData.name}</p>
          <p>メールアドレス: {formData.email}</p>
          <p>メッセージ: {formData.message}</p>
          <button>はい</button>
          <button>いいえ</button>
        </div>
      )}
    </div>
  );
};

export default ContactForm







/*　以下、react-hook-formじゃない例
class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmitted: false,
      email: '',
      hasEmailError: false,
      content: '',
      hasContentError: false,
    };
  }

  handleEmailChange(event) {
    const inputValue = event.target.value;
    const isEmpty = inputValue === '';
    this.setState({
      email: inputValue,
      hasEmailError: isEmpty,
    });
  }

  handleContentChange(event) {
    const inputValue = event.target.value;
    const isEmpty = inputValue === '';
    this.setState({
      content: inputValue,
      hasContentError: isEmpty,
    });
  }

  handleSubmit() {
    this.setState({isSubmitted: true});
  }

  render() {
    let emailErrorText;
    if (this.state.hasEmailError) {
      emailErrorText = (
        <p className='contact-message-error'>
          メールアドレスを入力してください
        </p>
      );
    }

    let contentErrorText;

    if (this.state.hasContentError) {
      contentErrorText = (
        <p className='contact-message-error'>
          お問い合わせ内容を入力してください
        </p>
      )
    }

    let contactForm;
    if (this.state.isSubmitted) {
      contactForm = (
        <div className='contact-submit-message'>
          送信完了
        </div>
      );
    } else {
      contactForm = (
        <form onSubmit={() => {this.handleSubmit()}} >
          <p>メールアドレス（必須）</p>
          <input
            value={this.state.email}
            onChange={(event) => {this.handleEmailChange(event)}}
          />
          {emailErrorText}
          <p>お問い合わせ内容（必須）</p>
          <textarea
            value={this.state.content}
            onChange={(event) => {this.handleContentChange(event)}}
          />
          {contentErrorText}

          <input
            type='submit'
            value='送信'
          />
        </form>
      );
    }

    return (
      <div className='contract-form'>
        {contactForm}
      </div>
    );
  }
} 


export default ContactForm  */