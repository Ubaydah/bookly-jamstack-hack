import {useState} from 'react';
import {Box, Heading, Text, FormControl, FormLabel, Input, useToast, Button} from '@chakra-ui/react'
import Link from 'next/link'

const RegisterUserForm = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const toast = useToast();

    const handleSubmit = () => {
        if(email && password && username){
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
        }else{
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

   

    return (
        <Box maxW={'400px'} mx='auto' textAlign={'center'} mt='10%' padding={{base: '15px'}}>
            <Heading mb='6' size='lg'>Register</Heading>
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
               <Button colorScheme={'teal'} type='submit' mt='4' onClick={handleSubmit}>Register</Button>
            </FormControl>
            <Text display={'flex'} gap='3px' justifyContent={'center'}>Already have an account? <Link href='/LoginUserForm'><Text color={'#4ae'}> Login</Text></Link> </Text>
        </Box>
    );
};

export default RegisterUserForm