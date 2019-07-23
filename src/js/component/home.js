import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export class Home extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="d-flex justify-content-center">
				<img
					className="saw"
					src="https://i.pinimg.com/474x/29/82/16/29821690e7648008f6c3aa779064b71e--horror-icons-horror-art.jpg"
				/>
				<div className="col rounded border-danger cardz-1 mr-1">
					<i className="far fa-clock clocks" />
				</div>
				<div className="col fourthDigit rounded mr-3 cardz-2">
					<p className="nums">{this.props.fourth % 10}</p>
				</div>
				<div className="col thirdDigit rounded mr-3 cardz-3">
					<p className="nums">{this.props.third % 10}</p>
				</div>
				<div className="col secondDigit rounded mr-3 cardz-4">
					<p className="nums">{this.props.second % 10}</p>
				</div>
				<div className="col firstDigit rounded cardz-5">
					<p className="nums">{this.props.first % 10}</p>
				</div>
			</div>
		);
	}
}

let counts = 300;

setInterval(() => {
	let firstDigit = Math.floor(counts / 1);
	let secondDigit = Math.floor(counts / 10);
	let thirdDigit = Math.floor(counts / 100);
	let fourthDigit = Math.floor(counts / 1000);

	counts--;

	ReactDOM.render(
		<Home
			first={firstDigit}
			second={secondDigit}
			third={thirdDigit}
			fourth={fourthDigit}
		/>,
		document.querySelector("#app")
	);
}, 1000);

Home.propTypes = {
	first: PropTypes.number,
	second: PropTypes.number,
	third: PropTypes.number,
	fourth: PropTypes.number
};
