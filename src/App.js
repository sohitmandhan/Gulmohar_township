import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./Routes/appRoutes";
import NavBar from "./Components/NavBar";


function App() {
  return (
    <Router>
      <NavBar />
      <AppRoutes />
    </Router>
  );
}

export default App;
