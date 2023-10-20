import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./providers/routeProvider";
import "./styles/index.css";
import "./styles/reset.css";
function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
