import React from 'react';
import styles from './errorPage.module.css';

export default function ErrorPage() {
	return (
    <div className={styles.errorContainer}>
		<h1>Something went wrong!</h1>
		<p>Please try again later.</p>
    </div>
	);
}
