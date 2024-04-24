import { ReactNode } from "react";

interface ButtonProps {
  onSubmit?: () => void;
  icon?: ReactNode;
  extra?: string;
  text?: string;
}

export function Button(props: ButtonProps): JSX.Element {
  return (
    <button
      onSubmit={props.onSubmit}
      className={`${props.extra} px-4 bg-subtitle rounded-md hover:bg-background-white`}
    >
      {props.icon}
      {props.text}
    </button>
  );
}
