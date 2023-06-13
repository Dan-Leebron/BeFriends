import Browser from "./Browser.jsx";
import Chat from "../Chat.jsx"
import { useState } from 'react';

const ChatBrowser = () => {

  const views = {
    0: <Browser />,
    1: <Chat chatType={1} chatId={1} userId={1}/>,
  }
  const [currentView, setCurrentView] = useState(0);

  return (
    <div>
        <div className="tabs flex justify-center">
            <a className="tab" onClick={()=>setCurrentView(0)}>Browser</a>
            <a className="tab" onClick={()=>setCurrentView(1)}>Chat</a>
        </div>
        <div>
            {views[currentView]}
        </div>
    </div>
  )
}

export default ChatBrowser

