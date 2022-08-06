import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';
import { Loading } from './Loading';

const SForm = styled.form`
  display: grid;
  grid-template: auto / 100%;
  gap: 30px;
  border-radius: 8px;
  margin: auto;
`;

const SFormHead = styled.div`
  margin-bottom: 5px;
  font-weight: bold;
`;

const SFormInput = styled.input`
  border: none;
  width: 100%;
  background-color: #f1f1f1;
  padding: 10px;
  border-radius: 4px;
  transition: 0.3s;

  &:focus {
    outline: none;
    background: #e7e7e7;
    transition: 0.3s;
  }
`;

const SFormTextArea = styled.textarea`
  border: none;
  width: 100%;
  background-color: #f1f1f1;
  padding: 10px;
  border-radius: 4px;
  height: 10em;
  transition: 0.3s;

  &:focus {
    outline: none;
    background: #e7e7e7;
    transition: 0.3s;
  }
`;

const SButton = styled.button`
  border: none;
  background-color: #555;
  color: #fff;
  padding: 10px;
  min-height: 40px;
  display: flex;
  width: 150px;
  text-align: center;
  transition: 0.3s;
  border-radius: 4px;
  margin: auto;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #999;
    cursor: pointer;
  }
`;

const SSent = styled.p`
  text-align: center;
  margin: 0;
`;

const SError = styled.p`
  text-align: center;
  background-color: #e07171;
  color: #fff;
  border-radius: 5px;
  padding: 5px;
  margin: 0;
`;

const ContactForm = () => {
  const [name, setName] = useState('');
  const [mailAddress, setMailAddress] = useState('');
  const [body, setBody] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const handleOnChangeName = (event: { target: HTMLInputElement }) => {
    setName(event.target.value);
  };
  const handleOnChangeMailAddress = (event: { target: HTMLInputElement }) => {
    setMailAddress(event.target.value);
  };
  const handleOnChangeBody = (event: { target: HTMLTextAreaElement }) => {
    setBody(event.target.value);
  };

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (loading) return;
    setError(false);
    setLoading(true);
    axios
      .post('APIのURL', {
        name,
        mailAddress,
        body,
      })
      .then(() => {
        setSent(true);
      })
      .catch((r) => {
        console.error(r);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <SForm onSubmit={handleOnSubmit}>
      <h1>CONTACT US</h1>
      <div>
        <SFormHead>お名前*</SFormHead>
        <SFormInput type={'text'} value={name} required onChange={handleOnChangeName} />
      </div>
      <div>
        <SFormHead>メールアドレス</SFormHead>
        <SFormInput value={mailAddress} onChange={handleOnChangeMailAddress} />
      </div>
      <div>
        <SFormHead>内容*</SFormHead>
        <SFormTextArea
          required
          onChange={handleOnChangeBody}
          placeholder="内容をご入力ください"
        ></SFormTextArea>
      </div>
      {sent ? (
        <SSent>ありがとうございます。メッセージは送信されました。</SSent>
      ) : (
        <SButton type="submit">{loading ? <Loading /> : `送信`}</SButton>
      )}
      {error && (
        <SError>
          エラーが発生しました。もう一度やり直してください。
        </SError>
      )}
    </SForm>
  );
};

export default ContactForm;