// export function SmileSvg(){
//     return
// }
export function MinusSvg() {
	return (
		<svg
			viewBox="0 0 24 24"
			width={24}
			height={24}
			stroke="currentColor"
			strokeWidth={2}
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
			className="feather feather-minus-circle"
			id="decrease"
		>
			<circle cx={12} cy={12} r={10} />
			<line x1={8} y1={12} x2={16} y2={12} />
		</svg>
	);
}
export function UsersSvg() {
	return (
		<svg
			viewBox="0 0 24 24"
			width={24}
			height={24}
			stroke="currentColor"
			strokeWidth={2}
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
			className="feather feather-users"
		>
			<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
			<circle cx={9} cy={7} r={4} />
			<path d="M23 21v-2a4 4 0 0 0-3-3.87" />
			<path d="M16 3.13a4 4 0 0 1 0 7.75" />
		</svg>
	);
}
export function ClockSvg() {
	return (
		<svg
			viewBox="0 0 24 24"
			width={24}
			height={24}
			stroke="currentColor"
			strokeWidth={2}
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
			className="feather feather-clock"
		>
			<circle cx={12} cy={12} r={10} />
			<polyline points="12 6 12 12 16 14" />
		</svg>
	);
}

export function TriangleSvg() {
	return (
		<svg
			viewBox="0 0 24 24"
			width={24}
			height={24}
			stroke="currentColor"
			strokeWidth={2}
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
			className="feather feather-alert-triangle"
		>
			<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
			<line x1={12} y1={9} x2={12} y2={13} />
			<line x1={12} y1={17} x2="12.01" y2={17} />
		</svg>
	);
}

export function SearchSvg() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={24}
			height={24}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
			className="feather feather-search"
		>
			<circle cx={11} cy={11} r={8} />
			<line x1={21} y1={21} x2="16.65" y2="16.65" />
		</svg>
	);
}

export function BookmarkSvg({ isBookmarked }) {
	return (
		<svg
			viewBox="0 0 24 24"
			width={24}
			height={24}
			stroke="currentColor"
			strokeWidth={2}
			fill={isBookmarked ? " #fff" : "none"}
			strokeLinecap="round"
			strokeLinejoin="round"
			className="feather feather-bookmark"
		>
			<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
		</svg>
	);
}

export function BulletSvg() {
	return (
		<svg
			fill="#F48F82"
			width="30px"
			height="30px"
			viewBox="0 0 32 32"
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			className="bullet-icon"
		>
			<g id="SVGRepo_bgCarrier" strokeWidth={0} />
			<g
				id="SVGRepo_tracerCarrier"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<g id="SVGRepo_iconCarrier">
				{" "}
				<title>bullet</title>{" "}
				<path d="M12.096 16q0 1.632 1.152 2.784t2.752 1.12 2.752-1.12 1.152-2.784-1.152-2.752-2.752-1.152-2.752 1.152-1.152 2.752z" />{" "}
			</g>
		</svg>
	);
}

export function SmileSvg() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={24}
			height={24}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
			className="feather feather-smile"
		>
			<circle cx={12} cy={12} r={10} />
			<path d="M8 14s1.5 2 4 2 4-2 4-2" />
			<line x1={9} y1={9} x2="9.01" y2={9} />
			<line x1={15} y1={9} x2="15.01" y2={9} />
		</svg>
	);
}

export function ArrowLeftSvg() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={24}
			height={24}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
			className="feather feather-arrow-left"
		>
			<line x1={19} y1={12} x2={5} y2={12} />
			<polyline points="12 19 5 12 12 5" />
		</svg>
	);
}

export function ArrowRightSvg() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={24}
			height={24}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
			className="feather feather-arrow-right"
		>
			<line x1={5} y1={12} x2={19} y2={12} />
			<polyline points="12 5 19 12 12 19" />
		</svg>
	);
}

export function PersonSvg() {
	return (
		<svg
			fill="#777"
			width="25px"
			height="25px"
			viewBox="0 0 32 32"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g id="SVGRepo_bgCarrier" strokeWidth={0} />
			<g
				id="SVGRepo_tracerCarrier"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<g id="SVGRepo_iconCarrier">
				<path d="M16 15.503A5.041 5.041 0 1 0 16 5.42a5.041 5.041 0 0 0 0 10.083zm0 2.215c-6.703 0-11 3.699-11 5.5v3.363h22v-3.363c0-2.178-4.068-5.5-11-5.5z" />
			</g>
		</svg>
	);
}

export function CloseSvg({ color }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={24}
			height={24}
			viewBox="0 0 24 24"
			fill={color}
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
			className="feather feather-x"
			id="feather-x"
		>
			<line x1={18} y1={6} x2={6} y2={18} />
			<line x1={6} y1={6} x2={18} y2={18} />
		</svg>
	);
}

export function UploadSvg() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={24}
			height={24}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
			className="feather feather-upload-cloud"
		>
			<polyline points="16 16 12 12 8 16" />
			<line x1={12} y1={12} x2={12} y2={21} />
			<path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
			<polyline points="16 16 12 12 8 16" />
		</svg>
	);
}

export function AddSvg({ size = 24 }) {
	return (
		<svg
			viewBox="0 0 24 24"
			width={size}
			height={size}
			stroke="currentColor"
			strokeWidth={2}
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
			className="feather feather-add-circle"
		>
			<circle cx={12} cy={12} r={10} />
			<line x1={12} y1={8} x2={12} y2={16} />
			<line x1={8} y1={12} x2={16} y2={12} />
		</svg>
	);
}
