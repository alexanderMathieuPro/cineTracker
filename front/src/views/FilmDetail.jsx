import { Link, redirect, useLoaderData, useNavigate } from "react-router-dom";
const FilmDetail = () => {
  const film = useLoaderData();
  console.log(film.data);

  const handleClick = () => {
    fetch(`http://localhost:1337/api/films/${film.data.id}`, {
      method: "DELETE",
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("token"),
      },
    });
    window.location.href = '/';
  }

  return (
    <div className="h-screen bg-gradient-main">
      <div className="overflow-hidden flex bg-white p-4 rounded-b-[50px] shadow-2xl">
        <img
          src={`http://localhost:1337${film.data.attributes.cover.data.attributes.url}`}
          className="h-96 rounded-[50px] border-4 border-sky-500"
        />
        <div className="pt-4 ml-6 space-y-2">
        <h1 className=" font-bold text-3xl text-sky-500">
          {film.data.attributes.titre}
        </h1>
        <p className="text-lg">{film.data.attributes.description}</p>
        </div>
      </div>
      <div className="flex justify-end my-[-30px] mx-[80px] space-x-10">
        <Link to={`/film/${film.data.id}/edit`} className="group bg-sky-500 rounded-full p-4 flex justify-center items-center hover:shadow-md hover:shadow-sky-400 transition-transform transform hover:scale-105 duration-300">
          <span class="material-symbols-outlined text-[40px] text-white">
            edit
          </span>
        </Link>
        <button onClick={() => handleClick()} className="bg-red-500 rounded-full p-4 flex justify-center items-center hover:shadow-md hover:shadow-red-400 transition-transform transform hover:scale-105 duration-300">
          <span class="material-symbols-outlined text-[40px] text-white">
            Delete
          </span>
        </button>
      </div>
    </div>
  );
};

export default FilmDetail;
