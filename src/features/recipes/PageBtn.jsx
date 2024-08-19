export default function PageBtn({ children, onClick, className }) {
	return (
		<button className={`pagination ${className}`} onClick={onClick}>
			{children}
		</button>
	);
}
