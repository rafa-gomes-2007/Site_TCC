import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Header from "./components/Header";
import Operacao from "./pages/Operação";
import Materiais from "./pages/Materiais";
import Home from "./pages/Home";
import Bibliografia from "./pages/Bibliografia";
import Membros from "./pages/Membros";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div className="bg-cinza-back"><Header/><main className="flex-cols content-center"><Home/></main></div>,
  },
  {
    path: "/Operacao",
    element: <div className="bg-cinza-back"><Header/><main className="flex-cols content-center"><Operacao/></main></div>,
  },
  {
    path: "/Materiais",
    element: <div className="bg-cinza-back"><Header/><main className="flex-cols content-center"><Materiais/></main></div>,
  },
  {
    path: "/Bibliografia",
    element: <div className="bg-cinza-back"><Header/><main className="flex-cols content-center"><Bibliografia/></main></div>,
  },
  {
    path: "/Membros",
    element: <div className="bg-cinza-back"><Header/><main className="flex-cols content-center"><Membros/></main></div>,
  },
]);

export default function App() {
  return(
    <RouterProvider router={router}/>
  )
}