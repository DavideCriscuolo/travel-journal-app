import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "./layout/DeafultLayout";
import Home from "./pages/Home";
import SingleJourney from "./pages/SingleJourney";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout></DefaultLayout>}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/details/:id" element={<SingleJourney />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
