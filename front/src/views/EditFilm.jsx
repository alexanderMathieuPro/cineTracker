import { Form, useLoaderData } from "react-router-dom";
const EditFilm = () => {
    const film = useLoaderData();
    console.log(film);
    return(
        <div className="flex justify-center items-center h-full bg-sky-500 pt-4 pb-4">
            <Form method="post" className="flex flex-col w-[400px] space-y-4 border-4 rounded-2xl p-4" encType="multipart/form-data">
                <div className="flex flex-col">
                    <label htmlFor="title" className="text-white text-center">Titre</label>
                    <input type="text" defaultValue={film.data.attributes.titre} name="titre" placeholder="Titre" className="bg-transparent border-b-2 focus:outline-none text-white font-bold placeholder:text-gray-300 placeholder:font-normal"/>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="title" className="text-white text-center">Description</label>
                    <textarea defaultValue={film.data.attributes.description} name="description" placeholder="Description" className="bg-transparent border-b-2 focus:outline-none text-white font-bold placeholder:text-gray-300 placeholder:font-normal h-[200px]"/>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="title" className="text-white text-center">Durée (en minutes)</label>
                    <input type="number" defaultValue={film.data.attributes.duree} name="duree" placeholder="durée" className="bg-transparent border-b-2 focus:outline-none text-white font-bold placeholder:text-gray-300 placeholder:font-normal"/>
                </div>
                <input type="date" name="dateSortie" defaultValue={film.data.attributes.dateSortie}/>
                <input type="file" name="cover" defaultValue={film.data.attributes.cover.data.attributes.name}/>
                <label>Categories</label>
                {/* {categories.data.map((category) => (
                    <div key={category.id}>
                        <input type="checkbox" name="categories[]" value={category.id} />
                        <label htmlFor="categories">{category.attributes.nom}</label>
                    </div>
                ))} */}
                <input type="submit" />
            </Form>
        </div>
    )
}
export default EditFilm;