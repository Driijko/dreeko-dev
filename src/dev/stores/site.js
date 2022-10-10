// IMPORT SCRIPTS --------------------------------------------------
import { writable } from "svelte/store";

// SETTINGS --------------------------------------------------------
const pageExitDuration = 3000;

// SETUP ----------------------------------------------------------
export function setUp() {
  // Page exit duration
  document.documentElement.style.setProperty("--page-exit-duration", `${pageExitDuration}ms`);
  document.documentElement.style.setProperty("--viewport-height", `${window.innerHeight}px`);
}

function createCurrentPage() {
  const { subscribe, set } = writable("loading-screen");

  return {
    subscribe,
    setCurrentPage: (currentPage, newPage)=> {
      currentPage.style.opacity = 0;
      const timerId = setTimeout(()=> {
        set(newPage);
        clearTimeout(timerId);
      }, pageExitDuration);
    },
  };
}

export const currentPage = createCurrentPage();