// QRScanner.js
import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';

const QRScanner = () => {
	const [qrData, setQrData] = useState('');

	const handleScan = (data) => {
		if (data) {
			setQrData(data);
		}
	};

	const handleError = (err) => {
		console.error(err);
	};

	return (
		<div>
			<QrReader
				delay={300}
				onError={handleError}
				onScan={handleScan}
				style={{
					width: '100%',
				}}
			/>
			<p>Scanned QR Data: {qrData}</p>
		</div>
	);
};

export default QRScanner;
