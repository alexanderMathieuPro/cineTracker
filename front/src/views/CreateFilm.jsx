import { Form, redirect, useActionData, useLoaderData, useNavigate } from "react-router-dom";

export const CreateFilmAction = async ({request}) => {
    const formData = await request.formData();
    const formUpload = new FormData();

    const categories = formData.getAll("categories[]");
    formUpload.append("files", formData.get("cover"));

    const uploadFile = await fetch("http://localhost:1337/api/upload", {
        method: "POST",
        headers: {
            "Authorization": "Bearer " + localStorage.getItem("token")
        },
        body: formUpload
    }).then((res) => res.json())

    const data = await fetch("http://localhost:1337/api/films", {
        method: "POST",
        headers: {
            "Authorization": "Bearer " + localStorage.getItem("token"),
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            data: {
                titre: formData.get("titre"),
                description: formData.get("description"),
                duree: parseInt(formData.get("duree")),
                dateSortie: formData.get("dateSortie"),
                cover: uploadFile[0].id,
                categories: categories
            }
        })
    })
    return redirect('/');
    
}

const CreateFilm = () => {
    const categories = useLoaderData();
    console.log(categories);
    return(
        <div className="flex justify-center items-center h-full bg-sky-500 pt-4 pb-4">
            <Form method="post" className="flex flex-col w-[400px] space-y-4 border-4 rounded-2xl p-4" encType="multipart/form-data">
                <div className="flex flex-col">
                    <label htmlFor="title" className="text-white text-center">Titre</label>
                    <input type="text" name="titre" placeholder="Titre" className="bg-transparent border-b-2 focus:outline-none text-white font-bold placeholder:text-gray-300 placeholder:font-normal"/>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="title" className="text-white text-center">Description</label>
                    <input type="text" name="description" placeholder="Description" className="bg-transparent border-b-2 focus:outline-none text-white font-bold placeholder:text-gray-300 placeholder:font-normal"/>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="title" className="text-white text-center">Durée (en minutes)</label>
                    <input type="number" name="duree" placeholder="durée" className="bg-transparent border-b-2 focus:outline-none text-white font-bold placeholder:text-gray-300 placeholder:font-normal"/>
                </div>
                <input type="date" name="dateSortie" />
                <input type="file" name="cover"/>
                <label>Categories</label>
                {categories.data.map((category) => (
                    <div key={category.id}>
                        <input type="checkbox" name="categories[]" value={category.id} />
                        <label htmlFor="categories">{category.attributes.nom}</label>
                    </div>
                ))}
                <input type="submit" />
            </Form>
        </div>
    )
}
export default CreateFilm;