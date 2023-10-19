import { Form, useActionData } from "react-router-dom";

export const CreateFilmAction = async ({request}) => {
    const formData = await request.formData();
    const formUpload = new FormData();
    formUpload.append("files", formData.get("cover"));

    const uploadFile = await fetch("http://localhost:1337/api/upload", {
        method: "POST",
        headers: {
            "Authorization": "Bearer " + localStorage.getItem("token")
        },
        body: formUpload
    }).then((res) => res.json())
    console.log(uploadFile);
    return null;
}

const CreateFilm = () => {
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
                    <input type="text" name="duree" placeholder="durée" className="bg-transparent border-b-2 focus:outline-none text-white font-bold placeholder:text-gray-300 placeholder:font-normal"/>
                </div>
                <input type="date" name="dateSortie" />
                <input type="file" name="cover"/>
                <input type="submit" />
            </Form>
        </div>
    )
}
export default CreateFilm;