import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./views/Home";
import Header from "./components/Header";
import Login, { LoginAction } from "./views/Login";
import ProtectedRoutes from "./components/ProtectedRoutes";
import CreateFilm, { CreateFilmAction } from "./views/CreateFilm";
import FilmDetail from "./views/FilmDetail";
import EditFilm from "./views/EditFilm";

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
    path: '/film/:id',
    element: <ProtectedRoutes><FilmDetail /></ProtectedRoutes>,
    loader: async ({params}) => {
      const filmId = params.id;
      const film = await fetch(`http://localhost:1337/api/films/${filmId}?populate=*`, {
        method: "GET", 
        headers: {
          "Authorization": "Bearer " + localStorage.getItem("token")
        }
      }).then((res) => res.json());
      return film;
    }
  },
  {
    path: '/film/:id/edit',
    element: <ProtectedRoutes><EditFilm /></ProtectedRoutes>,
    loader: async ({params}) => {
      const filmId = params.id;
      const film = await fetch(`http://localhost:1337/api/films/${filmId}?populate=*`, {
        method: "GET", 
        headers: {
          "Authorization": "Bearer " + localStorage.getItem("token")
        }
      }).then((res) => res.json());
      return film;
    }
  },
  {
    path: '/films/create',
    element: <ProtectedRoutes><CreateFilm /></ProtectedRoutes>,
    action: CreateFilmAction,
    loader: async () => {
      const data = await fetch("http://localhost:1337/api/categories", {
        method: "GET", 
        headers: {
          "Authorization": "Bearer " + localStorage.getItem("token")
        }
      }).then((res) => res.json());
      return data;
    }
  }
])
function App() {
  return (
    <RouterProvider router={routes}/>
  );
}

export default App;
