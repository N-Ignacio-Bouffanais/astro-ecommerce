import Button from "./Button"

const AuthBtn = () => {
  let auth = false
  return (
    <>
      {!auth && (
        <a href="/login/">Ingresar</a>
      )}
      {auth && (
        <a href="/register/">Registarme</a>
      )}
    </>
  );
}

export default AuthBtn