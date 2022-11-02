import { FC } from 'react';
import { XataClient } from '../utils/xata';
import { ChakraProvider } from '@chakra-ui/react'
import RegisterUserForm from './RegisterUserForm';
import LoginUserForm from './LoginUserForm';
import AddBookForm from './AddBookForm';

const Index = ({ books, Component, pageProps }) => {
    return (
        <div>
            <ChakraProvider>
                {/* <AddBookForm {...pageProps} /> */}
                {/* <RegisterUserForm {...pageProps} /> */}
                <LoginUserForm {...pageProps} />
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

const xata = new XataClient();

export const getServerSideProps = async () => {
    const books = await xata.db.Book.getMany();
    return { props: { books } };
};

export default Index;