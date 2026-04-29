import clsx from "clsx";
import classes from "./Loader.module.css";
import React, {
  useContext,
  useMemo,
} from "react";
import { LoaderContext } from "./Loader.context";

/**
 * @param {object} props 
 * @param {boolean} props.loading
 */
export const Loader = (props) => {
  return (
    <LoaderContext.Provider value={props.loading}>
      {props.children}
    </LoaderContext.Provider>
  );
};


const allowedLoaderElements = ["a", "p", "h1", "h2", "h3", "h4", "h5", "h6", "label", "span"];
/**
 * @param {object} props
 * @param {"text" | "block" | "none"} [props.loadVariant]
 * @param {React.CSSProperties} [props.loadStyles]
 * @param {React.ReactNode} [props.loadElement]
 * @param {string} [props.loadClass]
 * @param {boolean} [props.full]
 * @param {number} [props.length]
 * @param {boolean} [props.invisible]
 * @param {boolean} [props.error]
 * @param {React.ReactNode} [props.errorElement]
 * @param {number} [props.min]
 * @param {number} [props.max]
 */
export const Loadable = ({
  component,
  children,
  loadElement,
  loadVariant = "text",
  loadStyles = {},
  loadClass,
  full,
  length,
  invisible,
  error,
  errorElement,
  props: innerProps,
  ...others
}) => {
  const loading = useContext(LoaderContext);

  const loadingComponent = useMemo(
    () =>
      (allowedLoaderElements.includes(component)
        ? component
        : "div"),
    [component]
  );

  const LoadComp = (loadingComponent ?? "div");
  const RenderComp = component;

  return (
    <>
      {loadElement !== undefined && loading ? (
        <LoadComp
          {...innerProps}
          className={clsx(
            classes["loadable"],
            "loading",
            classes[loadVariant],
            loadClass,
            {
              [classes["full"]]: full,
              [classes["invisible"]]: invisible,
            },
            others.className
          )}
          style={{
            ...others.style,
            ...loadStyles,
            "--length": `${length || 4}em`,
          }}
        />
      ) : loading ? (
        <LoadComp
          {...innerProps}
          component={loadingComponent}
          className={clsx(
            classes["loadable"],
            "loading",
            classes[loadVariant],
            loadClass,
            {
              [classes["full"]]: full,
              [classes["invisible"]]: invisible,
            },
            others.className
          )}
          style={
            {
              ...(others).style,
              ...loadStyles,
              "--length": `${length || 4}em`,
            }
          }
        ></LoadComp>
      ) : error ? (
        errorElement
      ) : !component ? (
        children
      ) : (
        <RenderComp {...others} {...innerProps}>
          {children}
        </RenderComp>
      )}
    </>
  );
};
