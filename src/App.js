import logo from './logo.svg';
import "./scss/styles.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FriendList from './components/FriendsList';
import NotFound from './NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FriendList />}>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
