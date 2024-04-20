interface InputProps {
  onSubmit?: () => void;
  placeholder?: string;
  value?: string;
}

export function Input(props: InputProps): JSX.Element {
  return (
    <input
      className="w-[50%] text-title py-2 duration-200 ease-in-out bg-transparent border-b-2 border-b-[#282828] outline-none focus:border-b-[#ec41b5] focus:border-opacity-50 "
      placeholder={props.placeholder}
      onSubmit={props.onSubmit}
      value={props.value}
    ></input>
  );
}
