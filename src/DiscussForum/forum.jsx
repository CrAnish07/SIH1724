import { ChatEngine } from 'react-chat-engine'
import ChatFeed from './components/ChatFeed'
import './forum.css'
import LoginForm from './components/LoginForm'


const projectID="6bde5ec4-356b-4384-b436-642bac33ed59"

const App = () => {

    if (!localStorage.getItem('username')) return <LoginForm />;

    return (
        <ChatEngine 
            height="100vh"
            projectID={projectID}
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
            onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
        />
    )
}

export default App