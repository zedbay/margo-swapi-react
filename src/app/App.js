import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/home/home";
import Movie from "./components/movie/movie";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/home" exact component={Home} />
        <Route path="/movie/:id" component={Movie} />
      </Router>
    </div>
  );
}

export default App;
