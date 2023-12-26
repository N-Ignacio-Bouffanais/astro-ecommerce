import { z } from "zod";

const User = z.object({
  username: z.string(),
  role: z.string(),
  password: z.string(),
  email: z.string(),
})

const LoginForm = () => {
  return (
    <form>
      <input type="email" />
      <input type="password" />
    </form>
  );
};

export default LoginForm;
