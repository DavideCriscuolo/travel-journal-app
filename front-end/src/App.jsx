import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "./layout/DeafultLayout";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout></DefaultLayout>}>
            <Route path="/" element={<Home />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
