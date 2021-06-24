import { PictureOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { sendMessage, isTyping } from 'react-chat-engine';


const MessageForm = (props) => {
    const  [value, setvalue] = useState('');
    const {chatID, creds}=props;

    const handleSubmit = (event) => {
        event.preventDefault();
        const text = value.trim();
        if(text.lenght>0) sendMessage(creds, chatID,{text});
        setvalue('');

    }
    const handleChange = (event) => {
        setvalue(event.target.value);
        
        isTyping(props,chatID);
        
    }
    return(
        <form className="message-form" onSubmit={handleSubmit}>
            <input
                className="message-input"
                placeholder="Send a Message..."
                value={value}
                onChange={handleChange}
                onSubmit={handleSubmit} 
            />
            <label htmlFor="upload-button">
                <span className="image-button">
                    <PictureOutlined className="picture-icon" />
                </span>
                

            </label>

        </form>
        
    );
}
export default MessageForm;