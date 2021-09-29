import Home from "./components/Home";
import Share from "./components/Share";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/">Home</Link>
        <Link to="/">회원가입</Link>
        <Link to="/login">로그인</Link>
        <Link to="/share">코스 공유하기</Link>
        <Link to="/search">코스 찾기</Link>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/share">
            <Share />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
