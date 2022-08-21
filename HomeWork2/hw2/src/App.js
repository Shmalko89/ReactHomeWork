import logo from './logo.svg';
import './App.css';

const messageList = [
  {
    text: 'Привет!',
    author: 'Я',
  }
];


function App() {
  const [messages, setMessages] = useState(messageList);
  const [value, setValue] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (messages[messages.length - 1]?.author === "Пользователь") {
        setMessages(prevMessages => [
          ...prevMessages,
          { text: "Привет, это Бот", author: "Bot" },
        ]);
      }
    }, 1500);

    return () => {
      clearTimeout(timeout);
    };
  }, [messages]);

  const handleMessage = (e) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: "new message", author: "Пользователь" },
    ]);
    e.preventDefault();
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const BotMessage = ({ text }) => <div> {text} </div>;

  return (
    <div className="App">
      <form onSubmit={handleMessage}>
        <button type="submit">Send</button>
        <input value={value} type="text" onChange={handleChange} />
        {messages.map((message, i) => (
          <BotMessage key={i} text={message.text} />
        ))}
      </form>

    </div>
  );
}

export default App;
