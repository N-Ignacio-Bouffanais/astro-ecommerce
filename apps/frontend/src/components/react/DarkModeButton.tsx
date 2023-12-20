import { createSignal, createEffect } from "solid-js";

const DarkModeButton = () => {

  const initializeTheme = () => {
    let theme;
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      theme = "dark";
    } else {
      theme = "light";
    }
    return theme;
  };

  const [theme, setTheme] = createSignal<string>(initializeTheme());
  const doc = document.querySelector("html") as HTMLElement;

  createEffect(() => {
    if (theme() === "dark") {
      doc.classList.add("dark");
    }
    if (theme() === "dark") {
      doc.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      doc.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  });

  return (
    <button onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
      >
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 3h.393a7.5 7.5 0 0 0 7.92 12.446A9 9 0 1 1 12 2.992z"
        />
      </svg>
    </button>
  );
};

export default DarkModeButton;
