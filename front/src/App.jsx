import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./views/Home";
import Header from "./components/Header";
import Login, { LoginAction } from "./views/Login";
import ProtectedRoutes from "./components/ProtectedRoutes";
import CreateFilm, { CreateFilmAction } from "./views/CreateFilm";

const routes = createBrowserRouter([
  {
    path: '/',
    element: <ProtectedRoutes><Home /></ProtectedRoutes>,
    loader: async () => {
      const data = await fetch("http://localhost:1337/api/films?populate=*&sort=createdAt:desc", {
        method: "GET", 
        headers: {
          "Authorization": "Bearer " + localStorage.getItem("token")
        }
      }).then((res) => res.json());
      return data;
    }
  }, 
  {
    path: '/login',
    element: <Login />,
    action: LoginAction
  },
  {
    path: '/films/create',
    element: <ProtectedRoutes><CreateFilm /></ProtectedRoutes>,
    action: CreateFilmAction
  }
])
function App() {
  return (
    <RouterProvider router={routes}/>
  );
}

export default App;
