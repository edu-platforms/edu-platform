import Message from './Message'
import Text from './Text'
import Top from './Top'
export default function ChatBar() {
  return (
    <div className="chat-bar">
      <Top user={{ name: 'Jasdev', time: '14:20' }} />
      <Message message={'hi darren'} postion={0} />
      <Message message={'hi john'} postion={1} />
      <Message message={' good'} postion={0} />
      <Message message={'samom my name dev hi'} postion={0} />
      <Message message={'samom my name dev hi you now good'} postion={1} />
      <Message message={'good'} postion={0} />
      <Message message={'samom my name dev hi you now good'} postion={1} />
      <Message message={'samom my name dev hi you now good'} postion={0} />
      <Message message={'samom my name dev hi you now good'} postion={1} />
      <Message message={'samom my name dev hi you now good'} postion={1} />
      <Message message={'samom my name dev hi you now good'} postion={0} />
      <Message message={'samom my name dev hi you now good'} postion={0} />
      <Text />
    </div>
  )
}
