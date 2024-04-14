import { BrowserRouter, Route, Routes } from "react-router-dom";
import Content from "./components/Content";
import Fruit from "./components/Fruit";
import Navbars from "./components/Navbars";
import Addition from "./components/Addition";
import Pokemon from "./components/Pokemon";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbars />}>
            <Route index element={<Content />} />
            <Route path="fruit" element={<Fruit />} />
            <Route path="addition" element={<Addition />} />
            <Route path="pokemon" element={<Pokemon />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
