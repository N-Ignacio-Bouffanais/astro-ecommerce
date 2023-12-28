
const AuthBtn = () => {
  let auth = false
  return (
    <>
      {!auth && (
        <a className="flex items-center rounded-lg bg-blue-600 h-10 px-3 font-semibold text-white" href="/login/">Ingresar</a>
      )}
      {auth && (
        <a className="flex items-center rounded-lg bg-red-600 h-10 px-3 font-semibold text-white" href="/register/">Salir</a>
      )}
    </>
  );
}

export default AuthBtn