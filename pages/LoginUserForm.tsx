import React from 'react'
import { useState } from 'react';
import {Box, Heading, Text, FormControl, FormLabel, Input, Button, useToast} from '@chakra-ui/react'
import Link from 'next/link';

const LoginUserForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const toast = useToast();


    const handleSubmit = (e) => {
        e.preventDefault();
        if(email && password){
            const send = () => {
            fetch("/api/user/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    password
                }),
                }).then(() => window.location.reload());
            }
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
            <Heading size='lg' mb='7'>Login to Bookly</Heading>
            <FormControl isRequired>
               <Box mb='3'>
                 <FormLabel>Email</FormLabel>
                 <Input type='email' variant={'flushed'} value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Input your email' />
               </Box>
               <Box mb='3'>
                 <FormLabel>Password</FormLabel>
                 <Input type='password' variant={'flushed'} value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Input your password' />
               </Box>

               <Button colorScheme={'teal'} type='submit' mt='4' mb='4' onClick={handleSubmit}>Login</Button>
            </FormControl>
            <Text display={'flex'} gap='3px' justifyContent={'center'}>Don't have an account? <Link href='/RegisterUserForm'><Text color={'#4ae'}> Create Account</Text></Link> </Text>
        </Box>
    );
};

export default LoginUserForm