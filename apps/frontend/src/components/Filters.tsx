import { useState } from "react"
import Button from "./Button"

const Filters = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [1,2,3,4]

  const prev = () =>{
    console.log("prev")
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    console.log(currentIndex);
  }

  const next = () => {
    console.log("next")
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    console.log(currentIndex)
  }

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-[90dvw] mx-auto mt-6">
        <form className="relative">
          <svg
            className="absolute top-3 left-2"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5l-1.5 1.5l-5-5v-.79l-.27-.27A6.516 6.516 0 0 1 9.5 16A6.5 6.5 0 0 1 3 9.5A6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14S14 12 14 9.5S12 5 9.5 5"
            />
          </svg>
          <input
            className="h-12 w-full rounded-2xl border-2 pl-9 outline-none border-[#1b1c21]"
            type="text"
            aria-label="search input"
            placeholder="Buscar en Atom Center"
          />
        </form>
        <div className="grid gap-1">
          <button title="left" onClick={() => prev()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <g transform="rotate(180 12 12)">
                <path
                  fill="currentColor"
                  d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886"
                />
              </g>
            </svg>
          </button>
          <div className="flex whitespace-nowrap relative">
            <Button
              custom_width="w-32"
              title="accesorios"
              text="accesorios"
              size="md"
              color="dark"
            />
            <Button
              custom_width="w-32"
              title="gorros"
              text="gorros"
              size="md"
              color="dark"
            />
            <Button
              custom_width="w-32"
              title="poleras"
              text="poleras"
              size="md"
              color="dark"
            />
            <Button
              custom_width="w-32"
              title="camisas"
              text="camisas"
              size="md"
              color="dark"
            />
          </div>
          <button title="right" onClick={() => next()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

export default Filters