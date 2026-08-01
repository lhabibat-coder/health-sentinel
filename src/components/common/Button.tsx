import type { ReactNode } from "react";
import Button from "@mui/material/Button";
import type { ButtonProps } from "@mui/material/Button";

type SharedButtonProps = ButtonProps & {
  children: ReactNode;
};

export default function SharedButton(props: SharedButtonProps) {
  return <Button {...props} />;
}