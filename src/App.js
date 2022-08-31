import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/index.routes";
import { LoadingProvider } from "./contexts/loading.context";

function App() {
  return (
    <BrowserRouter>
      <LoadingProvider>
        <Router />
      </LoadingProvider>
    </BrowserRouter>
  );
}

export default App;
