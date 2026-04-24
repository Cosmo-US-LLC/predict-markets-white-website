import { tokenImageMap } from "../../presale-gg/assets/img/tokens";
import clsx from "clsx";
import { useState, useRef, useEffect, useMemo } from "react";
import { Loadable } from "./Loader";
import { ChevronDownIcon } from "lucide-react";
/**
 * @typedef {import("@/presale-gg/api/api.types").API.PaymentToken} PaymentToken
 * 
 * @param {object} props
 * @param {PaymentToken[]} props.tokens
 * @param {(token: PaymentToken) => void} props.onChange
 * @param {PaymentToken | null} props.value
 * @param {string} [props.defaultLabel]
 * @param {string} [props.placeholder]
 * @param {PaymentToken | null} [props.defaultToken]
 * @param {boolean} props.selected
 */
const TokenSelect = ({ tokens, onChange, value, defaultLabel, defaultToken, placeholder, selected, ...others }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("pointerdown", handleClickOutside);
    return () => {
      document.removeEventListener("pointerdown", handleClickOutside);
    };
  }, []);

  const text = useMemo(() => {
    return (
      value?.symbol.toUpperCase() ??
      defaultLabel ??
      defaultToken?.symbol.toUpperCase() ??
      placeholder ??
      "None"
    );
  }, [value, defaultLabel, defaultToken, placeholder]);

  const isCard = useMemo(() => {
    return text.toUpperCase() === "CARD"
  }, [text])

  return (
    <div {...others} className="relative w-[100%]" ref={dropdownRef}>
      <button
        onClick={() => {
          if (tokens.length === 1) {
            onChange(tokens[0])
          } else {
            setOpen(!open)
          }
        }}
        className={clsx("flex  w-full items-center rounded-[0.25rem] border px-1.5 md:px-3 py-1 text-left transition-colors cursor-pointer", {
          "border-[#3F9CED]!": selected,
          "justify-center bg-[#F5F5F5] rounded-[0.5rem] h-[1.875rem] border-[#0000001A]": isCard,
          "bg-white h-[2.5rem] border-[#B3B3B3]": !isCard
        })}
      >
        <span className="flex items-center md:gap-2 gap-1">
          {(value || defaultToken) && !isCard && (
            <Loadable
              loadVariant="block"
              component="img"
              loadClass="!rounded-full"
              src={tokenImageMap[(value ?? defaultToken).symbol.toLowerCase()]}
              alt=""
              className="w-5 h-5"
            />
          )}
          {isCard && (
            <div className="flex gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="18"
                viewBox="0 0 34 18"
                fill="none"
              >
                <rect
                  width="33.1579"
                  height="18"
                  rx="2.52907"
                  fill="#FFFFFF"
                />
                <path
                  d="M14.2318 5.36914L12.9877 12.6354H14.9775L16.2226 5.36914H14.2318ZM11.3193 5.37729L9.37045 10.3326L9.16267 9.58442C8.77833 8.68289 7.68722 7.38816 6.40625 6.5722L8.18825 12.6318L10.2937 12.6282L13.4273 5.37576L11.3193 5.37729Z"
                  fill="#000000"
                />
                <path
                  d="M8.39939 5.89809C8.28373 5.45547 7.94852 5.32355 7.53244 5.30777H4.44746L4.42188 5.45242C6.82261 6.03204 8.41116 7.42865 9.07033 9.10794L8.39939 5.89809ZM20.2475 6.76294C20.7579 6.75163 21.2651 6.84635 21.7368 7.04104L21.9164 7.12508L22.1856 5.55021C21.7915 5.40301 21.1738 5.24512 20.4031 5.24512C18.4368 5.24512 17.0509 6.23069 17.0402 7.64308C17.0274 8.68671 18.0274 9.2694 18.7828 9.61727C19.5581 9.97381 19.8181 10.2005 19.8145 10.5188C19.8084 11.0052 19.1963 11.2283 18.6247 11.2283C17.8278 11.2283 17.4046 11.1188 16.751 10.8478L16.4946 10.7317L16.2147 12.358C16.6804 12.5612 17.5397 12.7359 18.4317 12.7451C20.5233 12.7451 21.8826 11.7713 21.8969 10.2621C21.9056 9.43646 21.3749 8.80641 20.225 8.28943C19.529 7.95225 19.1032 7.72814 19.1073 7.3879C19.1073 7.08586 19.4686 6.76294 20.2475 6.76294ZM27.2921 5.37805H25.7547C25.2772 5.37805 24.922 5.50743 24.7122 5.98111L21.7577 12.6402H23.8473C23.8473 12.6402 24.1882 11.7448 24.2654 11.5487L26.8136 11.5517C26.8729 11.8054 27.0561 12.6402 27.0561 12.6402H28.9021L27.2921 5.37805ZM24.8381 10.0614C25.0019 9.64427 25.6309 8.03069 25.6309 8.03069C25.6201 8.05055 25.7931 7.61048 25.896 7.33697L26.03 7.96345L26.4911 10.0614H24.8381Z"
                  fill="#000000"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="18"
                viewBox="0 0 35 18"
                fill="none"
              >
                <rect
                  width="34.1053"
                  height="18"
                  rx="2.52907"
                  fill="#FFFFFF"
                />
                <path
                  d="M13.9757 15.1655C10.6333 15.1655 7.91406 12.5344 7.91406 9.3003C7.91406 6.0662 10.6333 3.43506 13.9757 3.43506C17.3182 3.43506 20.0374 6.0662 20.0374 9.3003C20.0374 12.5344 17.3182 15.1655 13.9757 15.1655Z"
                  fill="#EE2C3C"
                />
                <path
                  d="M21.2569 3.43506C19.2845 3.43506 17.5461 4.36529 16.4392 5.78116H18.8021C19.0869 6.1448 19.3403 6.5319 19.5318 6.9542H15.7105C15.537 7.33053 15.4058 7.7238 15.319 8.12725H19.9235C20.0022 8.50615 20.0447 8.89911 20.0447 9.3003H15.1953C15.1953 9.70147 15.2377 10.0945 15.3178 10.4733H19.9222C19.8355 10.8768 19.7041 11.2701 19.5306 11.6464H15.7093C15.9009 12.0687 16.1542 12.4558 16.4392 12.8194H18.8021C18.4641 13.251 18.0664 13.6355 17.62 13.9619C18.6631 14.7383 19.941 15.1613 21.2569 15.1655C24.5994 15.1655 27.3187 12.5344 27.3187 9.3003C27.3187 6.0662 24.5994 3.43506 21.2569 3.43506Z"
                  fill="#F99D3C"
                />
              </svg>
            </div>
          )}
          <Loadable
            length={3}
            component="span"
            className={clsx("flex flex-col justify-center leading-[1.25] font-bold", {
              "text-[0.625rem] md:text-[0.75rem]": !isCard,
              "text[0.75rem] md:text-[0.875rem]": isCard
            })}
          >
            <span>{text}</span>
            {(value || defaultToken) && (selected || tokens.length === 0) && !isCard && (
              <span className="font-normal text-[#00000080] text-[0.625rem] md:text-[0.75rem]">
                {(value ?? defaultToken).chain}
              </span>
            )}
          </Loadable>
        </span>
        {tokens.length > 1 && (
          <ChevronDownIcon className={clsx(`w-3 h-3 md:w-4 md:h-4 transition-transform text-[#000] ml-auto`, {
            "rotate-180": open
          })} />
        )}
      </button>

      {tokens.length > 1 && (
        <div
          className={clsx("absolute left-0 max-h-[250px] overflow-y-auto mt-1 min-w-28 w-full border border-gray-300 rounded-md shadow-md z-10 overflow-hidden transition-opacity", {
            "opacity-0 pointer-events-none": !open,
          })}
          style={{
            background: "rgba(0,0,0,0.5)",
            backdropFilter: "blur(5px)",
          }}
        >
          {tokens.map((token) => (
            <button
              key={token.id}
              onClick={() => {
                onChange(token)
                setOpen(false)
              }}
              className="flex items-center text-[#fff] hover:bg-white/20 gap-x-2 w-full px-3 py-2 text-[11.7px] font-[700] font-[Inter] text-left cursor-pointer transition-colors"
            >
              <img
                src={tokenImageMap[token.symbol.toLowerCase()]}
                className="max-h-[20px]"
              />
              <span className="flex flex-col leading-[10px] space-y-[-10px] gap-0.5">
                {token.symbol.toUpperCase()}
                <span className="text-[9px] font-[500]">
                  {token.chain}
                </span>
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default TokenSelect