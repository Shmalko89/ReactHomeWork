import {BrowserRouter, Routes, Route, Link, useParams} from "react-router-dom";
import './App.js';



const Routed = () => {

    return(
        <BrowserRouter>
            <div style = {{width: '2000px', dispala: 'flex'}}>
                <Link to='/'>Главная страница</Link>
                <Link to='profile'>Страница Пользователя</Link>
                <Link to='chatList'>Список чатов</Link>

            </div>

            <div style = {{width: '2000px', dispala: 'flex'}}>
                <Routes>
                    <Route path="/" element = {<mainPage/>}/>
                    <Route path="chats">
                        <Route path=":chatList" element = {<chatList/>}/>    
                    </Route>
                    <Route path="profile" element = {<profile/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    )


}

export default Routed

const mainPage = () => <div style={{height: '50vh', background: '#a9a9a9', width:'100%'}}>Главная страница</div>

const profile = () => <div style={{height: '50vh', background: '#a9a9a9', width:'100%'}}>Страница Пользователя</div>