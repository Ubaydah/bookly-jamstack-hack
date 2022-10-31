import {useState} from 'react';
import {Box, Heading, Text, FormControl, FormLabel, Input, useToast, Button} from '@chakra-ui/react'

const RegisterUserForm = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = () => {

    }

    const send = () => {
        fetch("/api/user/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                username,
                password
            }),
        }).then(() => window.location.reload());
    };

    return (
        <Box maxW={'400px'} mx='auto' textAlign={'center'} mt='10%' padding={{base: '15px'}}>
            <Heading>Register</Heading>
            <FormControl isRequired>
               <Box mb='3'>
                 <FormLabel>Username</FormLabel>
                 <Input type='text' variant={'flushed'} value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Input your username' />
               </Box>
               <Box mb='3'>
                 <FormLabel>Email</FormLabel>
                 <Input type='email' variant={'flushed'} value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Input your email' />
               </Box>
               <Box mb='3'>
                 <FormLabel>Password</FormLabel>
                 <Input type='password' variant={'flushed'} value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Input your password' />
               </Box>
               <Button colorScheme={'teal'} type='submit' mt='4' onClick={handleSubmit}>Login</Button>
            </FormControl>
        </Box>
        // <form
        //     onSubmit={(e) => {
        //         e.preventDefault();
        //         send();
        //     }}
        //     style={{ display: "flex", gap: 8 }}
        // >
        //     <label>
        //         Register:
        //         <input
        //             value={email}
        //             onChange={(e) => setEmail(e.target.value)}
        //             type="text"
        //             placeholder="Enter your email"
        //         />
        //         <input
        //             value={username}
        //             onChange={(e) => setUsername(e.target.value)}
        //             type="text"
        //             placeholder="Enter your username"
        //         />
        //         <input
        //             value={password}
        //             onChange={(e) => setPassword(e.target.value)}
        //             type="text"
        //             placeholder="Enter your password"
        //         />
        //     </label>
        //     <button>Save</button>
        // </form>
    );
};

export default RegisterUserForm