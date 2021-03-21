import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import "./index.css";

interface TextInputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	value: string;
	onChange: (value: any) => void;
}

const TextInput = ({ value, onChange, ...rest }: TextInputProps) => {
	return (
		<input
			type="text"
			className="text-input w-100"
			value={value}
			onChange={e => onChange(e.target.value)}
			{...rest}
		/>
	);
};

export default TextInput;
