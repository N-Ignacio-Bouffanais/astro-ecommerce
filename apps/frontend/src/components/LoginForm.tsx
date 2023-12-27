import { LoginSchema } from "../types/FormSchema";
import type { z } from "zod";
import { createStore } from "solid-js/store";
import Button from "./Button";

const LoginForm = () => {
  type GliderInputEvent = InputEvent &{
    currentTarget: HTMLInputElement;
    target: Element;
  }

  type Schema = z.infer<typeof LoginSchema>
  const [form, setForm] = createStore<Schema>({
    email: "",
    password: "",
  });

  const handleInput = (e:GliderInputEvent) =>{
    const {name, value} = e.currentTarget;
    setForm(name as keyof Schema, value);
  }

  const handleSubmit = (e:Event) => {
    e.preventDefault();
    console.log(JSON.stringify(form))
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" onInput={handleInput} />
      <input type="password" />
      <Button
        color="dark"
        size="lg"
        text="Enviar"
        title="Enviar"
      />
    </form>
  );
};

export default LoginForm;
