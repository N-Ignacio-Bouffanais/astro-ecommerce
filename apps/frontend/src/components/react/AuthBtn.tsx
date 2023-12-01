import { useEffect, useState } from "react";

export interface Props {
  authorized: boolean;
}

const AuthBtn = (props: Props) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <div>
      {props.authorized ? (
        <>
          <svg
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            className="rounded-full p-1 mx-4 bg-slate-600 text-white"
            xmlns="http://www.w3.org/2000/svg"
            width="44"
            height="44"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M370.7 96.1C346.1 39.5 289.7 0 224 0S101.9 39.5 77.3 96.1C60.9 97.5 48 111.2 48 128v64c0 16.8 12.9 30.5 29.3 31.9c24.6 56.6 81 96.1 146.7 96.1s122.1-39.5 146.7-96.1c16.4-1.4 29.3-15.1 29.3-31.9v-64c0-16.8-12.9-30.5-29.3-31.9zM336 144v16c0 53-43 96-96 96h-32c-53 0-96-43-96-96v-16c0-26.5 21.5-48 48-48h128c26.5 0 48 21.5 48 48zm-146.7 18.7l-6-21.2c-.9-3.3-3.9-5.5-7.3-5.5s-6.4 2.2-7.3 5.5l-6 21.2l-21.2 6c-3.3.9-5.5 3.9-5.5 7.3s2.2 6.4 5.5 7.3l21.2 6l6 21.2c.9 3.3 3.9 5.5 7.3 5.5s6.4-2.2 7.3-5.5l6-21.2l21.2-6c3.3-.9 5.5-3.9 5.5-7.3s-2.2-6.4-5.5-7.3l-21.2-6zm-76.6 153.8C46.7 342.6 0 407 0 482.3C0 498.7 13.3 512 29.7 512H128v-64c0-17.7 14.3-32 32-32h128c17.7 0 32 14.3 32 32v64h98.3c16.4 0 29.7-13.3 29.7-29.7c0-75.3-46.7-139.7-112.7-165.8C303.9 338.8 265.5 352 224 352s-79.9-13.2-111.3-35.5zM176 448c-8.8 0-16 7.2-16 16v48h32v-48c0-8.8-7.2-16-16-16zm96 32a16 16 0 1 0 0-32a16 16 0 1 0 0 32z"
            />
          </svg>
          {isHovering && (
            <ul className="absolute flex flex-col gap-3 justify-center items-center top-20 right-10 rounded-xl border p-4 text-black dark:text-white bg-white dark:bg-[#1b1c21] w-56 h-56">
              {/* <li>{username}</li> */}
              <li>
                <svg
                  className="rounded-full p-1 mx-4 bg-slate-600 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="44"
                  height="44"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M370.7 96.1C346.1 39.5 289.7 0 224 0S101.9 39.5 77.3 96.1C60.9 97.5 48 111.2 48 128v64c0 16.8 12.9 30.5 29.3 31.9c24.6 56.6 81 96.1 146.7 96.1s122.1-39.5 146.7-96.1c16.4-1.4 29.3-15.1 29.3-31.9v-64c0-16.8-12.9-30.5-29.3-31.9zM336 144v16c0 53-43 96-96 96h-32c-53 0-96-43-96-96v-16c0-26.5 21.5-48 48-48h128c26.5 0 48 21.5 48 48zm-146.7 18.7l-6-21.2c-.9-3.3-3.9-5.5-7.3-5.5s-6.4 2.2-7.3 5.5l-6 21.2l-21.2 6c-3.3.9-5.5 3.9-5.5 7.3s2.2 6.4 5.5 7.3l21.2 6l6 21.2c.9 3.3 3.9 5.5 7.3 5.5s6.4-2.2 7.3-5.5l6-21.2l21.2-6c3.3-.9 5.5-3.9 5.5-7.3s-2.2-6.4-5.5-7.3l-21.2-6zm-76.6 153.8C46.7 342.6 0 407 0 482.3C0 498.7 13.3 512 29.7 512H128v-64c0-17.7 14.3-32 32-32h128c17.7 0 32 14.3 32 32v64h98.3c16.4 0 29.7-13.3 29.7-29.7c0-75.3-46.7-139.7-112.7-165.8C303.9 338.8 265.5 352 224 352s-79.9-13.2-111.3-35.5zM176 448c-8.8 0-16 7.2-16 16v48h32v-48c0-8.8-7.2-16-16-16zm96 32a16 16 0 1 0 0-32a16 16 0 1 0 0 32z"
                  />
                </svg>
              </li>
              <li>Ajustes</li>
              <li>Cerrar sesion</li>
            </ul>
          )}
        </>
      ) : (
        <button className="ml-2 bg-blue-600 rounded-lg h-10 w-28">
          Ingresar
        </button>
      )}
    </div>
  );
};

export default AuthBtn;
