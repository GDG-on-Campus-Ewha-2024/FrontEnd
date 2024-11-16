import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { index, letter } from "./pages";
import { GlobalStyle } from "./styles/GlobalStyles";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<index />} />
        <Route path="/letter" element={<letter />} />
      </Routes>
    </Router>
  );
};

// 파일의 마지막에 export 문을 위치시킴
export default App;
