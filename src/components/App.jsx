import { Toaster } from 'react-hot-toast';
import Form from './Form/Form';
import Filter from './Filter/Filter';
import ContactList from './Contacts/Contacts';
import Loader from './Loader/Loader';
import { useGetContactsQuery } from 'redux/contactsApi';

const App = () => {
  const { data: contacts = [], isError, isLoading } = useGetContactsQuery();
  return (
    <>
      {!isError && (
        <>
          <h1 className="mt-16 mb-1 text-2xl font-mono font-bold">Phonebook</h1>
          <Form />
        </>
      )}
      {!isError && !contacts.length && (
        <h2 className="text-2xl font-mono font-bold">
          No contacts in phonebook!
        </h2>
      )}
      {contacts.length > 0 && (
        <>
          <h2 className="text-2xl font-mono font-bold">Contacts</h2>
          <Filter />
        </>
      )}
      {isLoading && !isError && <Loader />}
      <ContactList />
      <Toaster />
    </>
  );
};

export default App;
