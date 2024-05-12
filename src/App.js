import "./scss/styles.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FriendList from './components/FriendsList';
import FriendDetails from './components/FriendDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FriendList />}></Route>
        <Route path="/friend-details" element={<FriendDetails />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
