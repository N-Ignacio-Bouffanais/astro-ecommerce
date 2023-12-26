import { Show } from "solid-js";
import Button from "./Button"


const AuthBtn = () => {
  let auth = false
  return (
    <>
      <Show when={!auth}>
        <Button
          color="blue"
          size="md"
          text="Ingresar"
          title="authentication button"
          ref="/login"
        />
      </Show>
      <Show when={auth}>
        <Button
          color="red"
          size="md"
          text="Salir"
          title="authentication button"
        />
      </Show>
    </>
  );
}

export default AuthBtn