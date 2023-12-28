import { useForm } from "react-hook-form";
import type { RegisterFormType } from "../types/FormSchema";
import axios from "../libs/axios";
import Button from "./Button";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegisterFormType>();

  const onSubmit = handleSubmit(async (data) => {
    const response = await axios.post("api/login", {
      email: data.email,
      password: data.password,
    });
    console.log(response);
    reset();
  });

  function ChangeVisibility() {
    let x = document.getElementById("password") as HTMLInputElement;
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  function ChangeVisibility2() {
    let y = document.getElementById("c_password") as HTMLInputElement;
    if (y.type === "password") {
      y.type = "text";
    } else {
      y.type = "password";
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col items-center gap-3">
      <div>
        <label
          htmlFor=""
          className="flex justify-start font-medium text-sm dark:text-white "
        >
          Nombre de Usuario
        </label>
        <input
          type="text"
          autoFocus
          placeholder="username"
          {...register("username", {
            required: true,
          })}
          className="flex justify-start w-80 h-8 pl-2 font-medium bg-white rounded-md outline-none placeholder:text-gray-500 placeholder:font-medium"
        />
        {errors.username && (
          <span className="font-semibold text-left">
            {errors.username.message}
          </span>
        )}
      </div>
      <div>
        <label
          htmlFor=""
          className="flex justify-start font-medium text-sm dark:text-white "
        >
          Correo electronico
        </label>
        <input
          required
          type="email"
          placeholder="ejemplo@ejemplo.com"
          {...register("email", {
            required: {
              value: true,
              message: "El correo es requerido",
            },
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              message: "El correo no es valido",
            },
          })}
          className="w-80 mb-2 h-8 pl-2 font-medium bg-white rounded-md outline-none placeholder:text-gray-500 placeholder:font-medium"
        />
        {errors.email && (
          <span className="font-semibold text-left">
            {errors.email.message}
          </span>
        )}
      </div>
      <div>
        <label
          htmlFor=""
          className="flex justify-start font-medium text-sm dark:text-white "
        >
          Contraseña
        </label>
        <div className="relative">
          <input
            placeholder="******"
            id="password"
            type="password"
            {...register("password", {
              required: {
                value: true,
                message: "La contraseña es requerida",
              },
              minLength: {
                value: 6,
                message: "La contraseña debe tener minimo 6 caracteres",
              },
            })}
            className="w-80 mb-2 h-8 pl-2 font-medium bg-white rounded-md outline-none placeholder:text-gray-500 placeholder:font-medium"
          />
          <i className="absolute right-2 top-2">
            <svg
              className="cursor-pointer"
              onClick={ChangeVisibility}
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 256 256"
            >
              <path
                fill="currentColor"
                d="M247.31 124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57 61.26 162.88 48 128 48S61.43 61.26 36.34 86.35C17.51 105.18 9 124 8.69 124.76a8 8 0 0 0 0 6.5c.35.79 8.82 19.57 27.65 38.4C61.43 194.74 93.12 208 128 208s66.57-13.26 91.66-38.34c18.83-18.83 27.3-37.61 27.65-38.4a8 8 0 0 0 0-6.5M128 168a40 40 0 1 1 40-40a40 40 0 0 1-40 40"
              />
            </svg>
          </i>
        </div>
      </div>
      {errors.password && (
        <span className="font-bold text-left w-80 sm:w-96 sm:text-center mb-1">
          {errors.password.message}
        </span>
      )}
      <div>
        <label className="flex justify-start font-medium text-sm dark:text-white">
          Confirmar contraseña
        </label>
        <div className="relative">
          <input
            required
            placeholder="******"
            id="c_password"
            type="password"
            {...register("c_password", {
              required: {
                value: true,
                message: "La contraseña es requerida",
              },
              minLength: {
                value: 6,
                message: "La contraseña debe tener al menos 6 caracteres",
              },
            })}
            className="w-80 mb-2 h-8 pl-2 font-medium bg-white rounded-md outline-none placeholder:text-gray-500 placeholder:font-medium"
          />
          <i className="absolute right-2 top-2">
            <svg
              className="cursor-pointer"
              onClick={ChangeVisibility2}
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 256 256"
            >
              <path
                fill="currentColor"
                d="M247.31 124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57 61.26 162.88 48 128 48S61.43 61.26 36.34 86.35C17.51 105.18 9 124 8.69 124.76a8 8 0 0 0 0 6.5c.35.79 8.82 19.57 27.65 38.4C61.43 194.74 93.12 208 128 208s66.57-13.26 91.66-38.34c18.83-18.83 27.3-37.61 27.65-38.4a8 8 0 0 0 0-6.5M128 168a40 40 0 1 1 40-40a40 40 0 0 1-40 40"
              />
            </svg>
          </i>
        </div>
      </div>
      <Button color="dark" size="lg" text="Enviar" title="Enviar" />
    </form>
  );
};

export default RegisterForm;
