import { useState } from "react"
import Modal from "../ui/modal"
import Spinner from "./Spinner"
import { useAccount } from "../../presale-gg/web3"
import { api } from "../../presale-gg/api"
import toast from "react-hot-toast"
import FormLabel from "./FormLabel"
import Input from "./Input"

/**
 * @typedef {import("../ui/modal").ModalProps} ModalProps
 * 
 * @param {Omit<ModalProps, "title">} others
*/
const ContactModal = (others) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [mobile, setMobile] = useState("")
  const [loading, setLoading] = useState(false)
  const accountData = useAccount()

  const submit = async () => {
    if (!name) return toast.error("Name must be provided")
    if (!email) return toast.error("Email must be provided")
    if (!email.includes("@")) return toast.error("Email is invalid")
    setLoading(true);
    try {
      await api.postLeads({
        email,
        name,
        mobile,
        wallet_address: accountData.address,
      });
      toast.success("Successfully submitted details");
      others.onClose();
    } catch (err) {
      const msg = api.getApiErrorMessage(err, "Error submitting details");
      if (msg.toLowerCase() === "user details already exist") {
        toast(msg);
        others.onClose?.();
        return setLoading(false);
      }
      toast.error(msg);
    }
    setLoading(false);
  };

  return (
    <Modal {...others} title="Stay in Touch">
      <p>Submit your details to stay in touch with the latest news.</p>
      {[
        { label: "Name", value: name, setter: setName, placeholder: "John Smith" },
        { label: "Email", value: email, setter: setEmail, placeholder: "john.smith@email.com" },
        { label: "Mobile (optional)", value: mobile, setter: setMobile, placeholder: "(555) 555-1234" },
      ].map((item, i) => (
        <FormLabel key={i} label={item.label}>
          <Input value={item.value} onChange={(e) => item.setter(e.target.value)} placeholder={item.placeholder} />
        </FormLabel>
      ))}
      <button
        className="btn_primary w-full text-[0.875rem]! font-medium text-white transition-colors hover:bg-[#0066cc] h-[3rem] disabled:opacity-60 py-0! px-4! leading-[1.2]"
        onClick={submit}
      >
        {loading ? <Spinner size={6} className="" /> : "Submit"}
      </button>
    </Modal>
  )
}

export default ContactModal