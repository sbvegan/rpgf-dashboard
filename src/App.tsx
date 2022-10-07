import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Main from "./components/layout/Main";
import './App.less';

const App = () => (
  <div className="App">
    <Routes>
        <Route path="/" element={<Main><Home/></Main>} />
        <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </div>
);

export default App;