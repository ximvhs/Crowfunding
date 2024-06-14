import React from "react";
import { useDropdown } from "./dropdown-context";
import { Fragment } from "react";

const List = ({ children }) => {
	const { show } = useDropdown();
	return (
		<Fragment>
			{show && (
				<div className="absolute left-0 z-20 w-full bg-white shadow-sm top-full max-h-[300px] overflow-y-auto">
					{children}
				</div>
			)}
		</Fragment>
	);
};

export default List;
