import { useLoaderData } from "react-router-dom";
const FilmDetail = () => {
    const chien = useLoaderData();
    console.log(chien.data);
    return (
        <div>FilmDetail</div>
    );
};

export default FilmDetail;