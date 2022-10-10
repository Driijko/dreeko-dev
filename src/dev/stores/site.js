// IMPORT SCRIPTS --------------------------------------------------
import { writable } from "svelte/store";

// SETTINGS --------------------------------------------------------
const pageExitDuration = 3000;

// SETUP ----------------------------------------------------------
export function setUp() {
  document.documentElement.style.setProperty("--page-exit-duration", `${pageExitDuration}ms`);
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