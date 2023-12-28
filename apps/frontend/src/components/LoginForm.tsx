import type { LoginFormType, RegisterFormType } from "../types/FormSchema";
import type { z } from "zod";
import Button from "./Button";
import { useState } from "react";

const LoginForm = () => {
  type GliderInputEvent = InputEvent & {
    currentTarget: HTMLInputElement;
    target: Element;
  };

  const [form, setForm] = useState<LoginFormType>({
    email: "",
    password: "",
  });

  const handleInput = (e: GliderInputEvent) => {
    const { name, value } = e.currentTarget;
    
  };

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    console.log(JSON.stringify(form));
  };

  return (
    <form>
      <input type="email" />
      <input type="password" />
      <Button color="dark" size="lg" text="Enviar" title="Enviar" />
    </form>
  );
};

export default LoginForm;
