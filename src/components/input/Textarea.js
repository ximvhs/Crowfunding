import React from "react";
import { useController } from "react-hook-form";

const Textarea = (props) => {
	const { control, name, placeholder = "", children, ...rest } = props;
	const { field } = useController({
		control,
		name,
		defaultValue: "",
	});
	return (
		<textarea
			placeholder={placeholder}
			className="resize-none min-h-[140px] outline-none w-full px-6 py-4 text-sm font-medium bg-transparent border dark:text-white dark:placeholder:text-text2 rounded-xl placeholder:text-text4"
			{...rest}
			{...field}
		></textarea>
	);
};

export default Textarea;
