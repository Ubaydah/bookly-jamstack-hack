import { FC } from 'react';
import { XataClient } from '../utils/xata';
import { RegisterUserForm } from '../components/RegisterUserForm';
import { LoginUserForm } from "../components/LoginUserForm";
import { AddBookForm } from "../components/AddBookForm"

type Props = Awaited<ReturnType<typeof getServerSideProps>>['props'];

const Index: FC<Props> = ({ books }) => {
    return (
        <main>
            <RegisterUserForm />
            <LoginUserForm />
            {/* <h1>Books</h1>
            <ul>
                <li>
                    {books.map(b => <label key={b.id}>
                    </label>)}
                </li>
            </ul> */}
        </main>
    );
};

const xata = new XataClient();

export const getServerSideProps = async () => {
    const books = await xata.db.Book.getMany();
    return { props: { books } };
};

export default Index;