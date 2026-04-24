import clsx from "clsx"

/**
 * @param {object} props
 * @param {string | import("react").ReactNode} props.label
 * @param {import("react").CSSProperties} props.labelStyles
 * @param {string} props.labelClass
 */
const FormLabel = ({ label, labelStyles, labelClass, children, ...others }) => {
  return (
    <div {...others} className={clsx("flex flex-col gap-1", others.className)}>
      <p className={clsx("font-bold text-[0.75rem]", labelClass)} style={labelStyles}>{label}</p>
      {children}
    </div>
  )
}

export default FormLabel