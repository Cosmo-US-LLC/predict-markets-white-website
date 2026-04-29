import clsx from "clsx"
import Spinner from "./Spinner"
import React from "react"

/**
 * @typedef {object} BaseInputProps
 * @property {import("react").CSSProperties} [BaseInputProps.inputStyles]
 * @property {boolean} [BaseInputProps.noInput]
 * @property {string} [BaseInputProps.inputClass]
 * @property {string} [BaseInputProps.label]
 * @property {string} [BaseInputProps.buttonText]
 * @property {boolean} [BaseInputProps.buttonLoading]
 * @property {() => void} [BaseInputProps.onButtonClick]
 * @property {string} [BaseInputProps.buttonClass]
 * @property {import("react").CSSProperties} [BaseInputProps.buttonStyles]
*/
let _Input = React.forwardRef(({ children, noInput, inputStyles, inputClass, label, buttonText, buttonLoading, onButtonClick, buttonClass, buttonStyles, ...others }, ref) => {
  return (
    <div
      className={clsx("relative flex items-center gap-0 overflow-hidden border border-[#00000033] bg-[#F7F7F7] h-[32px] md:h-[46px] pr-1 md:pr-1.5 gap-1 md:gap-2 rounded-[0.25rem]", others.className)}
      style={others.style}
      ref={ref}
    >
      {label && (
        <p className="absolute top-0 md:top-1 left-2 md:left-3 text-[0.625rem] font-bold text-black/50">{label}</p>
      )}
      {!noInput && (
        <input
          size={1}
          {...others}
          className={clsx("flex-1 border-none bg-transparent px-2 md:px-3 py-2.5 font-[Inter] text-[0.75rem] md:text-[0.875rem] font-[500] text-black outline-none", {
            "pt-5 md:pt-4.5": label
          })}
        />
      )}
      {children}
      {(buttonText || onButtonClick) && (
        <button
          className={clsx("bg-[#007BF9] text-[#fff] text-xs px-2 leading-[1] rounded-md hover:brightness-125 w-[3.75rem] h-6 md:h-8 text-center flex items-center justify-center font-bold cursor-pointer", buttonClass)}
          onClick={onButtonClick}
          style={buttonStyles}
        >
          {buttonLoading ? (
            <Spinner size={4} className="m-auto" />
          ) : buttonText}
        </button>
      )}
    </div>
  )
})

/** @type {(props: import("react").InputHTMLAttributes<HTMLInputElement> & BaseInputProps) => import("react").ReactNode} */
const Input = _Input

export default Input