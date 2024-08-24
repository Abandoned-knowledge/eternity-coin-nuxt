export type clickedButton = HTMLButtonElement | HTMLSpanElement;

function getAllSimilarElements(element: HTMLElement): HTMLElement | HTMLElement[] {
  if (element) {
    const parent = element.parentElement;
    if (parent) {
      return [...parent.children] as HTMLElement[];
    }
  }
  return element;
}

export default function (current: clickedButton, color: string) {
  const element = current.tagName == "SPAN" ? current.parentElement : current;
  if (element) {
    const allElements = getAllSimilarElements(element);

    if (Array.isArray(allElements)) {
      allElements.forEach((el: HTMLElement) => (el.style.backgroundColor = "transparent"));
    }
    element.style.backgroundColor = color;
  }
}
