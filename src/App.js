import { ChatEngine, ChatFeed } from 'react-chat-engine';
import './App.css';
import LoginForm from './components/LoginForm';

import React from 'react';

const App = () => {
	if(!localStorage.getItem('username')) return <LoginForm/>
	return (
		<ChatEngine
			height='100vh'
			userName={localStorage.getItem('username')}
			userSecret={localStorage.getItem('password')}
			projectID='40d89069-6daf-4e2e-9fe3-2f02f7cc2ffd'
			// renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps} />}
			onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
            
		/>
	);
}
export default App;