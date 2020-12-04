import React, { useState, useEffect } from "react";

function Slides({ slides }) {
	const [index, setIndex] = useState(0);
	const [data, setData] = useState(slides[index]);
	const [restore, setRestore] = useState(true);
	const [prev, setPrev] = useState(true);
	const [next, setNext] = useState(false);

	useEffect(() => {
		// console.log(index, data, restore, prev, next, slides.length);
		setData(slides[index]);
		if (index == slides.length - 1) {
			console.log("max", index);
			setNext(true);
			return;
		}
		if (index > 0 && index < slides.length - 1) {
			setPrev(false);
			setRestore(false);
			setNext(false);
		}
		if (index === 0) {
			setRestore(true);
			setPrev(true);
		}
	}, [index]);

	return (
		<div>
			<div id="navigation" className="text-center">
				<button
					data-testid="button-restart"
					className="small outlined"
					disabled={restore}
					onClick={() => {
						setIndex(0);
					}}
				>
					Restart
				</button>
				<button
					data-testid="button-prev"
					className="small"
					disabled={prev}
					onClick={() => {
						setIndex(index - 1);
					}}
				>
					Prev
				</button>
				<button
					data-testid="button-next"
					className="small"
					disabled={next}
					onClick={() => {
						setIndex(index + 1);
					}}
				>
					Next
				</button>
			</div>
			<div id="slide" className="card text-center">
				<h1 data-testid="title">{data.title}</h1>
				<p data-testid="text">{data.text}</p>
			</div>
		</div>
	);
}

export default Slides;
