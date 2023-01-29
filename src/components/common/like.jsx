import React from "react";

const Like = ({ onClick, liked }) => {
	let classes = "fa fa-heart";
	if (!liked) classes += "-o";

	return (
		<i
			onClick={onClick}
			style={{ cursor: "pointer" }}
			className={classes}
			aria-hidden="true"
		></i>
	);
};

export default Like;
/* 
class Like extends Component {
	render() {
		// let currentClass = "fa fa-heart";
		// currentClass += this.props.movie.like ? "" : "-o";

		let classes = "fa fa-heart";
		if (!this.props.liked) classes += "-o";

		return (
			// <i
			// 	style={{ cursor: "pointer" }}
			// 	onClick={() => this.props.onLike(this.props.movie)}
			// 	className={currentClass}
			// 	aria-hidden="false"
			// ></i>

			<i
				onClick={this.props.onClick}
				style={{ cursor: "pointer" }}
				className={classes}
				aria-hidden="true"
			></i>
		);

		// "fa fa-heart-o m-3" - белый цвет
		// "fa fa-heart" - черный цвет
	}
}

export default Like; */
