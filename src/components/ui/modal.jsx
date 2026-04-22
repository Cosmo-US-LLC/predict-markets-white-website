import clsx from "clsx"
import { X } from "lucide-react"
import { useEffect } from "react"
import { createPortal } from "react-dom"

/**
 * @typedef {object} ModalProps
 * @property {boolean} ModalProps.open
 * @property {() => void} ModalProps.onClose
 * @property {string} [ModalProps.title]
 * 
 * @param {ModalProps} props
 */
const Modal = ({ open, onClose, title, children }) => {
  useEffect(() => {
    if (open) {
      document.body.style.setProperty("overflow", "hidden", "important")
    } else {
      document.body.style.removeProperty("overflow")
    }
  }, [open])

  if (typeof document === undefined) return <></>
  return createPortal(
    <div
      className={clsx("fixed inset-0 z-[99999] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm transition-opacity", {
        "pointer-events-none opacity-0": !open
      })}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose?.()
      }}
    >
      <div className={clsx("flex flex-col gap-2 relative overflow-y-auto max-w-[500px] rounded-[15px] border border-[#B9E6FE] bg-[#E5F5FF] p-4 shadow-2xl transition-transform", {
        "translate-y-[100vh]": !open
      })}>
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#B9E6FE] text-[#0080ED] hover:bg-[#A8DFFE] cursor-pointer"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>
        {title && <h3 className="text-center font-[Inter] text-lg font-bold text-[#0080ED] px-10">{title}</h3>}
        {children}
      </div>
    </div>,
    document.body
  )
}

export default Modal