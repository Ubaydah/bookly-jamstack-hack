import { useState } from "react";
import { FormControl, FormLabel, Input, useToast, Box, Text, Button, Heading } from '@chakra-ui/react'


const AddBookForm = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [year_published, setYearPublished] = useState("");
    const [genre, setGenre] = useState("");
    const [image, setImage] = useState("");
    const toast = useToast();


    const handleSubmit = () => {
        if (title && author && year_published && genre && image) {
            let formData = new FormData()
            formData.append("image", image)
            formData.append("title", title)
            formData.append("author", author)
            formData.append("year_published", year_published)
            formData.append("genre", genre);

            const send = () => {
                fetch("/api/book/add-book", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: formData
                }).then(() => window.location.reload());
            };

        } else {
            toast({
                title: 'Error!',
                description: "Please fill all fields correctly",
                status: 'error',
                duration: 1000,
                isClosable: true,
                variant: 'left-accent',
                position: 'top',
            })
        }
    }


    // const handleFileInput = (e) => {
    //     const file = e.target.files[0]
    //     //setPreviewSource(URL.createObjectURL(file))
    //     setImage(file)
    //     //setFileInputState(e.target.value)
    // }

    return (
        <Box maxW={'400px'} mx='auto' mt='9' mb='7' p={{ base: '14px' }}>
            <Heading textAlign={'center'} mb='8' size='lg'>Bookly</Heading>
            <FormControl isRequired>
                <Heading size='md' mb='7' textAlign={'center'}>Add New Book</Heading>
                <Box mb='5'>
                    <FormLabel>Book Title</FormLabel>
                    <Input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
                </Box>
                <Box mb='5'>
                    <FormLabel>Book Author</FormLabel>
                    <Input type='text' value={author} onChange={(e) => setAuthor(e.target.value)} />
                </Box>
                <Box mb='5'>
                    <FormLabel>Genre</FormLabel>
                    <Input type='text' value={genre} onChange={(e) => setGenre(e.target.value)} />
                </Box>
                <Box mb='5'>
                    <FormLabel>Year Published</FormLabel>
                    <Input type='text' value={year_published} onChange={(e) => setYearPublished(e.target.value)} />
                </Box>
                <Box mb='5'>
                    <FormLabel>Image</FormLabel>
                    <FormLabel htmlFor="image" border='2px dashed lightgrey' h='90px' w='100%' textAlign={'center'}>
                        <Text mt='8' color='gray'>Upload Image</Text>
                        <Input type='file' id='image' display={'none'} onChange={(e) => setImage(e.target.files[0])} />
                    </FormLabel>
                    <Text textAlign={'center'}>{image ? image.name : ''}</Text>
                </Box>
                <Button colorScheme={'teal'} w='100%' onClick={handleSubmit}>Add Book</Button>
            </FormControl>
        </Box>
    );
};

export default AddBookForm