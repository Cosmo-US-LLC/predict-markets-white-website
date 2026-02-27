import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// 🔹 Generic scroll with offset
function scrollWithOffset(element, offset = 100) {
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
}

// 🔹 Scroll to wallet with offset
export function scrollToWallet(offset = 100) {
  const walletElement = document.getElementById("wallet");
  if (walletElement) {
    scrollWithOffset(walletElement, offset);
  }
}

// 🔹 Scroll to any section with offset
export function scrollToSection(sectionId, offset = 100) {
  const element = document.getElementById(sectionId);
  if (element) {
    scrollWithOffset(element, offset);
  }
}