import clsx from "clsx";
import css from "./Button.module.css";
import { useState } from "react";

interface ButtonProps {
  variant?: "primary" | "secondary";
  text: string;
}

export default function Button({ variant, text }: ButtonProps) {
  return (
    <button className={clsx(css.button, variant && css[variant])}>
      {text}
    </button>
  );
}
