import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}



// 🔹 Scroll to wallet with offset
function scrollWithOffset(element, offset = 10) {
  const y =
    element.getBoundingClientRect().top +
    window.scrollY -
    offset;

  window.scrollTo({
    top: y,
    behavior: "smooth",
  });
}

export function scrollToWallet(offset = 10) {
  const walletElement = document.getElementById("wallet");
  if (!walletElement) return;

  scrollWithOffset(walletElement, offset);
}

// 🔹 Scroll to any section with offset
export function scrollToSection(sectionId, offset = 100) {
  const element = document.getElementById(sectionId);
  if (element) {
    scrollWithOffset(element, offset);
    return true;
  }
  return false;
}

export function scrollToHashSection(sectionId, { offset = 80, navigate } = {}) {
  if (scrollToSection(sectionId, offset)) return;

  if (navigate && window.location.pathname !== "/") {
    navigate("/", { state: { scrollTo: sectionId } });
  }
}