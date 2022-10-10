import { Routes, Route, Navigate } from "react-router-dom";
import Main from "./components/layout/Main";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import FundingRounds from "./pages/FundingRounds";
import './App.less';

const App = () => (
  <div className="App">
    <Routes>
        <Route path="/rpgf" element={<Main><Home/></Main>} />
        <Route path="/dashboard" element={<Main><Dashboard/></Main>} />
        <Route path="/funding-rounds" element={<Main><FundingRounds/></Main>} />
        <Route path="*" element={<Navigate to="/rpgf" replace />} />
    </Routes>
  </div>
);

export default App;