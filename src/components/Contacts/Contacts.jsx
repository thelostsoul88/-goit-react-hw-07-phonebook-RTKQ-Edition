import { toast } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import {
  useDeleteContactsMutation,
  useGetContactsQuery,
} from 'redux/contactsApi';
import { selectFilter } from 'redux/selectors';

const ContactList = () => {
  const { data: contacts = [] } = useGetContactsQuery();
  const [deleteContacts] = useDeleteContactsMutation();
  const filter = useSelector(selectFilter);
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      {contacts && (
        <ul className="ml-5">
          {filteredContacts.map(({ id, name, number }) => {
            return (
              <li key={id} className="mb-2">
                {name}: {number}
                <button
                  className="ml-3 bg-red-400 rounded-md p-0.5 font-light hover:bg-red-600 hover:text-white hover:shadow-lg"
                  type="button"
                  onClick={() => deleteContacts(id)}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default ContactList;
