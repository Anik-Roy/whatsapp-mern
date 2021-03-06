import './App.css';
import Chat from './components/chat/Chat';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div className="app">
        <div className="app-body">
            {/* sidebar */}
            <Sidebar />

            {/* chat component */}
            <Chat />
        </div>
    </div>
  );
}

export default App;
