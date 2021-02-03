import React from 'react';
import { useSelector } from 'react-redux';
import Container from '../Container';
import ContactList from '../ContactList';
import ContactForm from '../ContactForm';
import Section from '../Section';
import Filter from '../Filter';
import { getContacts } from '../../redux/selectors';

function App() {
  const contacts = useSelector(getContacts);

  return (
    <Container>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        {contacts.length ? (
          <>
            <Filter />
            <ContactList />
          </>
        ) : (
          <div>Oops. no contacts here! Let's add some data!</div>
        )}
      </Section>
    </Container>
  );
}

export default App;
