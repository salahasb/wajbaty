import { ArrowLeftSvg, CloseSvg } from "../svgComponents";

function CloseButton({ onClick, className, backBtn }) {
	return (
		<button className={`close-btn ${className || ""}`} onClick={onClick}>
			{backBtn ? <ArrowLeftSvg /> : <CloseSvg />}
		</button>
	);
}

export default CloseButton;
