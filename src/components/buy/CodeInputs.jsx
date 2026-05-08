import {
  resetUserBonusCode,
  userApplyBonusCode,
  userResetReferralCode,
  userUpdateReferralCode,
  useUserState,
} from "../../presale-gg/stores";
import clsx from "clsx";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { api } from "../../presale-gg/api";
import Input from "./Input";
import { XIcon } from "lucide-react";

let scrolled = false;

/**
 * @param {object} props
 * @param {string | null} props.appliedText
 * @param {(code: string) => Promise<void>} props.onApply
 * @param {() => void} props.onChange
 * @param {string} props.label
 * @param {string} props.urlKey
 * @param {() => void} props.onClose
*/
const CodeInput = ({
  appliedText,
  onApply,
  onChange,
  label,
  urlKey,
  className,
  style,
  onClose,
  ...others
}) => {
  const [loading, setLoading] = useState(false);
  const [code, setCode] = useState("");
  const [hasDefault, setHasDefault] = useState(false);
  const [containerRef, setContainerRef] = useState(null);

  useEffect(() => {
    if (!containerRef || hasDefault) return;
    const urlValue = new URLSearchParams(window.location.search).get(urlKey);
    if (!urlValue) return;
    setHasDefault(true);
    setCode(urlValue);
    if (scrolled) return;
    scrolled = true;
    setTimeout(() => {
      containerRef.scrollIntoView({ block: "center", behavior: "smooth" });
    }, 500);
  }, [urlKey, containerRef, hasDefault]);

  const apply = async () => {
    if (!code) return toast.error("Code is invalid");
    setLoading(true);
    try {
      await onApply(code);
      toast.success("Successfully applied code");
    } catch (err) {
      toast.error(api.getApiErrorMessage(err, "Error applying code"));
    }
    setLoading(false);
  };

  return (
    <div className={clsx("flex gap-2 items-center")}>
      <Input
        {...others}
        className="flex-1"
        ref={setContainerRef}
        placeholder={label}
        value={code}
        onInput={(e) => setCode(e.currentTarget.value)}
        buttonClass={clsx({ "animate-pulse ": hasDefault })}
        buttonStyles={{ animationIterationCount: 4 }}
        onButtonClick={() => {
          if (appliedText) onChange()
          else apply()
        }}
        buttonLoading={loading}
        buttonText={appliedText ? "Change" : "Apply"}
        noInput={!!appliedText}
      >
        {appliedText && <p className="px-2 md:px-3 text-[#25a140] text-[0.75rem] md:text-[0.875rem] flex-1 leading-[1.2]">{appliedText}</p>}
      </Input>
      {onClose && (
        <button className="flex items-center justify-center w-6 h-6 md:w-8 md:h-8 bg-black/10 rounded-full cursor-pointer hover:bg-black/20 transition-colors" onClick={onClose}>
          <XIcon className="w-4 h-4 md:w-5 md:h-5" />
        </button>
      )}
    </div>
  );
};

/**
 * @param {object} props
 * @param {() => void} [props.onClose]
*/
export const BonusCodeInput = ({ onClose }) => {
  const userData = useUserState();

  return (
    <CodeInput
      appliedText={
        userData.appliedBonusCode ? userData.appliedBonusCode.message : null
      }
      label="Bonus Code"
      onApply={userApplyBonusCode}
      onChange={resetUserBonusCode}
      urlKey="bonus_code"
      onClose={onClose}
    />
  );
};

/**
 * @param {object} props
 * @param {() => void} [props.onClose]
*/
export const ReferralCodeInput = ({ onClose }) => {
  const userData = useUserState();

  return (
    <CodeInput
      appliedText={userData.user?.referred_by ? "Applied Referral" : null}
      label="Referral Code"
      onApply={userUpdateReferralCode}
      onChange={userResetReferralCode}
      urlKey="referral_code"
      onClose={onClose}
    />
  );
};

const CodeInputs = () => {
  return (
    <>
      <BonusCodeInput />
      <ReferralCodeInput />
    </>
  );
};

export default CodeInputs;
