export default function Copyright() {
	const date = new Date();
	const year = date.getFullYear();

	return <p className="copyright">© Copyright {year} by Wajbaty Inc.</p>;
}
