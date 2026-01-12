import { loadHome } from "./pages/home";
import { loadProfile } from "./pages/profile";
import { loadScore } from "./pages/score";

const routes = {
  home: {
    title: "Home",
    render: loadHome,
  },
  profile: {
    title: "Profile",
    render: loadProfile,
  },

  score: {
    title: "Score",
    render: loadScore,
  },
};

export function navigate(route) {
  const container = document.getElementById("main-content");
  // const pageTitle = document.getElementById("page-title");
  const page = routes[route];

  if (!page) return;
  else {
    container.className = "";
    container.classList.add(`page-${route}`);
    container.innerHTML = "";
    page.render(container);
    // pageTitle.textContent = page.title;
  }
}
