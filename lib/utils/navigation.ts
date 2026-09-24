/**
 * Scrolls to a section on the home page
 * @param sectionId - The ID of the section to scroll to (e.g., "services", "contact")
 */
export function scrollToSection(sectionId: string) {
  if (typeof window === "undefined") return;

  // Check if we're on the home page
  if (window.location.pathname === "/") {
    // Scroll directly to the section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  } else {
    // If not on home page, navigate first then scroll
    const currentPath = window.location.pathname;
    window.location.href = `/${sectionId === "home" ? "" : `?scroll=${sectionId}`}`;
  }
}

/**
 * Handles scroll on page load if scroll parameter is present
 */
export function handleScrollOnLoad() {
  if (typeof window === "undefined") return;

  const params = new URLSearchParams(window.location.search);
  const scrollTo = params.get("scroll");
  
  if (scrollTo) {
    // Small delay to ensure DOM is ready
    setTimeout(() => {
      const element = document.getElementById(scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        // Clean up the URL
        window.history.replaceState({}, "", "/");
      }
    }, 100);
  }
}

