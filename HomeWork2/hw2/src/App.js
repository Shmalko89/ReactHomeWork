import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [messageList, setMessageList] = useState([]);
  const [messageBody, setMessageBody] = useState({
    text: '',
    author: ''
  })

  const botMessage = 'Сообщение Бота!';

  useEffect(() =>{
    if(messageList.length > 0 && messageList.slice(-1)[0].author !== 'robot'){
      setTimeout(() => {
        setMessageList(pervstate => [...pervstate, {text: botMessage, author: 'robot'}])
      }, 1500)
    }
  },[messageList])

  return (
    <div className='App'>
      <Form data ={messageBody} setData = {setMessageBody} setMessage = {setMessageList}></Form>
      <div className='messageList'>
        {
          messageList.map((e, i) => <Message text={e.text} author={e.author} key = {i}/>)
        }
      </div>
    </div>
  );
}

export default App;

const Form = ({data, setData, setMessage}) => {

  const {text, author} = data

  const submitForm = (e) =>{
    e.preventDefault()
    if(text.length > 0){
      setMessage(pervstate => [...pervstate, {text, author}])
    }
    setData(
      {
        text: '',
        author: ''
      }
    )
  }

  return(
    <form onSubmit={submitForm}>
      <input placeholder='Имя' value={text} onChange = {(e)=>
      setData(pervstate => ({...pervstate, text: e.target.value})
      )}/>

      <input placeholder='Текст' value={author} onChange = {(e)=>
      setData(pervstate => ({...pervstate, author: e.target.value})
      )}/>

      <button type='submit'>Отправить</button>
    </form>
  )
}

const Message = ({author, text}) =>{
  return(
    <div>
      <hr/>
      <h1>{author}</h1>
      <p>{text}</p>
    </div>
  )
}
  
