import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function scrollToWallet() {
  const walletElement = document.getElementById("wallet");
  if (walletElement) {
    walletElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

export function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}
