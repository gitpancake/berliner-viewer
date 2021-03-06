import React from 'react';
import Head from 'next/head';
import { Input, Button } from '@mui/material';
import styles from '../styles/Home.module.css';

export default function Home() {
	const [citizen, setCitizen] = React.useState('');

	const generateCitizenLink = () => {
		return `https://generator.artblocks.io/0xbdde08bd57e5c9fd563ee7ac61618cb2ecdc0ce0/3000${citizen.padStart(
			3,
			'0',
		)}`;
	};

	return (
		<div className={styles.container}>
			<Head>
				<title>Crypto Berliner Viewer</title>
				<meta name="description" content="Crypto Berliner Viewer" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>Crypto Berliner Viewer</h1>

				<Input
					id="citizen"
					type="text"
					placeholder="Enter your citzen #"
					style={{ color: 'white', marginTop: '20px' }}
					onChange={(e) => setCitizen(e.target.value)}
					onKeyDown={(e) => {
						console.log(e.key);
						if (citizen !== '' && e.key === 'Enter') {
							window.open(generateCitizenLink());
						}
					}}
					inputProps={{ maxLength: 3 }}
				/>
				<Button
					variant="outlined"
					style={{ marginTop: '20px' }}
					disabled={citizen === ''}
					onClick={() => window.open(generateCitizenLink())}
				>
					Find
				</Button>
			</main>
		</div>
	);
}
