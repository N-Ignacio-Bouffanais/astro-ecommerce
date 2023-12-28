import { useEffect, useState } from "react";

const DarkModeButton = () => {
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  });


  useEffect(() => {
    const doc = document.querySelector("html") as HTMLElement;
    if (theme === "dark") {
      doc.classList.add("dark");
    } else {
      doc.classList.remove("dark");
    }
  }, [theme]);

  return (
    <button
      className="mr-2"
      onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}
      title="dark mode/light mode"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
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
