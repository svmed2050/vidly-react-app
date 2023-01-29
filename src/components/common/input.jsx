import React from "react";

// Interface of our input component
const Input = ({ name, label, error, ...rest }) => {
	return (
		<div className="form-group">
			<label htmlFor={name}>{label}</label>
			<input
				// value={value}
				// onChange={onChange}
				// type={type}
				{...rest}
				name={name}
				id={name}
				className="form-control"
			/>
			{error && <div className="alert alert-danger">{error}</div>}
		</div>
	);
};

export default Input;
