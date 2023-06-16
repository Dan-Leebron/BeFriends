import Browser from "./Browser.jsx";
import Chat from "../Chat.jsx"
import { useState, useEffect } from 'react';

const ChatBrowser = ({userChats, setUserChats, currentUser, currentChat}) => {


  const views = {
    0: <Browser userChats={userChats} setUserChats={setUserChats} currentUser={currentUser} />,
    1: (currentChat > 0 ? <Chat chatType={1} chatId={currentChat} currentUser={currentUser}/> : <>No Chats Yet</>),
  }
  const [currentView, setCurrentView] = useState(0);

  return (
    <div>
        <div className="tabs flex justify-center">
            <a className="btn btn-outline m-4 tab" onClick={()=>setCurrentView(0)}>Browser</a>
            <a className="btn btn-outline m-4 tab" onClick={()=>setCurrentView(1)}>Chat</a>
        </div>
        <div>
            {views[currentView]}
        </div>
    </div>
  )
}

export default ChatBrowser

