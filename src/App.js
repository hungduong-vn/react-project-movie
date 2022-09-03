import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/index.routes";
import { LoadingProvider } from "./contexts/loading.context";
import { Suspense } from "react";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<></>}>
        <LoadingProvider>
          <Router />
        </LoadingProvider>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
