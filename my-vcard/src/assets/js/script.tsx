'use strict';

let navigationInitialized = false;

// Wait for DOM to be fully loaded and React to finish rendering
function initializeNavigation() {
  if (navigationInitialized) {
    console.log('Navigation already initialized, skipping...');
    return;
  }
  
  console.log('Initializing navigation...');
  navigationInitialized = true;
  
  // Element toggle function
  const elementToggleFunc = (elem: HTMLElement): void => { 
    elem.classList.toggle("active"); 
  }

  // Sidebar variables
  const sidebar = document.querySelector<HTMLElement>("[data-sidebar]");
  const sidebarBtn = document.querySelector<HTMLElement>("[data-sidebar-btn]");

  // Sidebar toggle functionality for mobile
  sidebarBtn?.addEventListener("click", (): void => { 
    if (sidebar) elementToggleFunc(sidebar); 
  });

  // Testimonials are handled by React component, no JavaScript needed here

  // Custom select variables
  const select = document.querySelector<HTMLElement>("[data-select]");
  const selectItems = document.querySelectorAll<HTMLElement>("[data-select-item]");
  const selectValue = document.querySelector<HTMLElement>("[data-select-value]");
  const filterBtns = document.querySelectorAll<HTMLElement>("[data-filter-btn]");

  select?.addEventListener("click", (): void => { 
    if (select) elementToggleFunc(select); 
  });

  // Add event in all select items
  selectItems.forEach((item) => {
    item.addEventListener("click", (): void => {
      const selectedValue: string = item.textContent?.toLowerCase() || "";
      
      if (selectValue) {
        selectValue.textContent = item.textContent;
      }
      
      if (select) {
        elementToggleFunc(select);
      }
      
      filterFunc(selectedValue);
    });
  });

  // Filter variables
  const filterItems = document.querySelectorAll<HTMLElement>("[data-filter-item]");

  const filterFunc = (selectedValue: string): void => {
    filterItems.forEach((item) => {
      if (selectedValue === "all") {
        item.classList.add("active");
      } else if (selectedValue === item.dataset.category) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  }

  // Add event in all filter button items for large screen
  let lastClickedBtn: HTMLElement | null = filterBtns[0] || null;

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", (): void => {
      const selectedValue: string = btn.textContent?.toLowerCase() || "";
      
      if (selectValue) {
        selectValue.textContent = btn.textContent;
      }
      
      filterFunc(selectedValue);

      if (lastClickedBtn) {
        lastClickedBtn.classList.remove("active");
      }
      
      btn.classList.add("active");
      lastClickedBtn = btn;
    });
  });

  // Contact form variables
  const form = document.querySelector<HTMLFormElement>("[data-form]");
  const formInputs = document.querySelectorAll<HTMLInputElement>("[data-form-input]");
  const formBtn = document.querySelector<HTMLElement>("[data-form-btn]");

  // Add event to all form input field
  formInputs.forEach((input) => {
    input.addEventListener("input", (): void => {
      // Check form validation
      if (form && formBtn) {
        if (form.checkValidity()) {
          formBtn.removeAttribute("disabled");
        } else {
          formBtn.setAttribute("disabled", "");
        }
      }
    });
  });

  // Page navigation variables
  const navigationLinks = document.querySelectorAll<HTMLElement>("[data-nav-link]");
  const pages = document.querySelectorAll<HTMLElement>("[data-page]");

  console.log('Navigation links found:', navigationLinks.length);
  console.log('Pages found:', pages.length);

  // Add event to all nav link
  navigationLinks.forEach((link, i) => {
    link.addEventListener("click", (): void => {
      const targetPage = link.textContent?.toLowerCase() || "";
      console.log('Clicked on:', targetPage);
      
      pages.forEach((page, j) => {
        if (targetPage === page.dataset.page) {
          console.log('Match found! Showing page:', targetPage);
          page.classList.add("active");
          navigationLinks[j]?.classList.add("active");
          window.scrollTo(0, 0);
        } else {
          page.classList.remove("active");
          navigationLinks[j]?.classList.remove("active");
        }
      });
    });
  });
}

// Multiple attempts to initialize navigation
function tryInitialize() {
  if (navigationInitialized) {
    return;
  }
  
  const navigationLinks = document.querySelectorAll<HTMLElement>("[data-nav-link]");
  const pages = document.querySelectorAll<HTMLElement>("[data-page]");
  
  console.log(`Looking for elements: found ${navigationLinks.length} nav links and ${pages.length} pages`);
  
  if (navigationLinks.length > 0 && pages.length > 0) {
    console.log('Elements found, initializing navigation...');
    initializeNavigation();
  } else {
    console.log('Elements not found yet, retrying in 100ms...');
    setTimeout(tryInitialize, 100);
  }
}

// Start trying to initialize
tryInitialize();

// Also try on DOMContentLoaded
document.addEventListener('DOMContentLoaded', tryInitialize);

// And try after a delay to ensure React has rendered
setTimeout(tryInitialize, 1000);