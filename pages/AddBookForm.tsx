import { useState } from "react";


export const AddBookForm = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [year_published, setYearPublished] = useState("");
    const [genre, setGenre] = useState("");
    const [image, setImage] = useState("");

    let formData = new FormData()
    formData.append("image", image)
    formData.append("title", title)
    formData.append("author", author)
    formData.append("year_published", year_published)
    formData.append("genre", genre)

    const handleFileInput = (e) => {
        const file = e.target.files[0]
        //setPreviewSource(URL.createObjectURL(file))
        setImage(file)
        //setFileInputState(e.target.value)
    }

    const send = () => {
        fetch("/api/user/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: formData
        }).then(() => window.location.reload());
    };

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                send();
            }}
            style={{ display: "flex", gap: 8 }}
        >
            <label>
                Register:
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    type="text"
                    placeholder="Enter your email"
                />
                <input
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    type="text"
                    placeholder="Enter your username"
                />
                <input
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                    type="text"
                    placeholder="Enter your username"
                />
                <input
                    value={year_published}
                    onChange={(e) => setYearPublished(e.target.value)}
                    type="text"
                    placeholder="Enter your password"
                />
                <input
                    type='file'
                    name='image'
                    //ref={initialRef}
                    onChange={handleFileInput}
                    //value={fileInputState}
                    required
                />
            </label>
            <button>Save</button>
        </form>
    );
};