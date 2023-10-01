import QRScanner from '@/components/QRScanner';
import QRCodeManager from '@/components/QRCodeManager';

export default function Home() {
	return (
		<main className={``}>
			<QRScanner />
			<QRCodeManager />
		</main>
	);
}
