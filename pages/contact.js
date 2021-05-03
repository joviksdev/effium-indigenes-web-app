import React from 'react';
import Layout from '../components/layouts';
import Contact from '../components/contact';
import ContactHeader from '../components/header/ContactHeader';

const contact = () => {
	return (
		<Layout>
			<ContactHeader />
			<Contact />
		</Layout>
	);
};

export default contact;
