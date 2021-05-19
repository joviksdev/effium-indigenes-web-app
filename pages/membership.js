import React from 'react';
import Context from '../components/membership';
import Layout from '../components/layouts';
import Header from '../components/header/MembershipHeader';

const Membership = () => {
	return (
		<Layout>
			<Header />
			<Context />
		</Layout>
	);
};

export default Membership;
