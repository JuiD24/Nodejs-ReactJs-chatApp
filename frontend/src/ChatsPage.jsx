import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'

import { PrettyChatWindow } from 'react-chat-engine-pretty';

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic('41f3cbea-21ce-43fd-bb08-ea18b31b5a24', props.user.username, props.user.secret)
    return (
        <div style={{ height: '100vh' }}>
            <PrettyChatWindow
                projectId='41f3cbea-###'
                username={props.user.username}
                secret={props.user.secret}
                style={{ height: '100%' }}
            />

            {/* <MultiChatSocket {...chatProps} />
        <MultiChatWindow  {...chatProps} style={{ height: '100%' }} /> */}
        </div>

    );
}

export default ChatsPage;