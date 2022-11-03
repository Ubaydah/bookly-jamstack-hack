import { FC } from 'react';
import { XataClient } from '../utils/xata';
import { ChakraProvider } from '@chakra-ui/react'
import { useState } from 'react';
import { Box, Heading, Text, FormControl, FormLabel, Input, Button, useToast } from '@chakra-ui/react'
import Link from 'next/link';
import RegisterUserForm from './RegisterUserForm';
import LoginUserForm from './LoginUserForm';
//import AddBookForm from './AddBookForm';

const Index = ({ Component, pageProps }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const toast = useToast();

    return (
        <div>
            <ChakraProvider>
                {/* <LoginUserForm /> */}
                {/* <AddBookForm {...pageProps} /> */}
                {/* <RegisterUserForm {...pageProps} /> */}
                {/* <LoginUserForm /> */}

                return (
                <Box maxW={'400px'} mx='auto' textAlign={'center'} mt='10%' padding={{ base: '15px' }}>
                    <Heading size='lg' mb='7'>Login to Bookly</Heading>
                    <FormControl isRequired>
                        <Box mb='3'>
                            <FormLabel>Email</FormLabel>
                            {/* <Input type='email' variant={'flushed'} value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Input your email' /> */}
                        </Box>
                        <Box mb='3'>
                            <FormLabel>Password</FormLabel>
                            {/* <Input type='password' variant={'flushed'} value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Input your password' /> */}
                        </Box>

                        <Button colorScheme={'teal'} type='submit' mt='4' mb='4'>Login</Button>
                    </FormControl>
                    <Text display={'flex'} gap='3px' justifyContent={'center'}>Don't have an account? <Link href='/RegisterUserForm'><Text color={'#4ae'}> Create Account</Text></Link> </Text>
                </Box>
                );
            </ChakraProvider>
        </div>
    )
}

// type Props = Awaited<ReturnType<typeof getServerSideProps>>['props'];

// const Index: FC<Props> = ({ books, Component, pageProps }) => {
//     return (
//         <main>
//             <ChakraProvider>
//                 <RegisterUserForm {...pageProps} />
//                 <LoginUserForm {...pageProps} />
//             </ChakraProvider>
//             {/* <h1>Books</h1>
//             <ul>
//                 <li>
//                     {books.map(b => <label key={b.id}>
//                     </label>)}
//                 </li>
//             </ul> */}
//         </main>
//     );
// };

//const xata = new XataClient();

// export const getServerSideProps = async () => {
//     const books = await xata.db.Book.getMany();
//     return { props: { books } };
// };

export default Index;