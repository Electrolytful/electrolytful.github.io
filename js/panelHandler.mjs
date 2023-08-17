export function panelHandler() {
  const panels = document.querySelectorAll(".panel");
  const panelDesc = document.querySelector(".panel-desc");

  // adding an event listener to each panel to listen for a mouse hover, making the panel active if hovered
  panels.forEach((panel) => {
    panel.addEventListener("mouseenter", () => {
      panel.classList.add("active");
      const panelId = panel.id;

      switch (panelId) {
        case "historyguessr":
          panelDesc.innerHTML = "Click to navigate to History Guessr!";
          panelDesc.classList.add("show");
          break;
        case "portfolio":
          panelDesc.innerHTML = "Click to navigate to Portfolio!";
          panelDesc.classList.add("show");
          break;
        case "swiftrift":
          panelDesc.innerHTML = "Click to navigate to Swift Rift!";
          panelDesc.classList.add("show");
          break;
        case "notesai":
          panelDesc.innerHTML = "Click to navigate to NotesAI!";
          panelDesc.classList.add("show");
          break;
        case "florin":
          panelDesc.innerHTML = "Click to navigate to Florin Council!";
          panelDesc.classList.add("show");
          break;
      }
    });

    // when panel is clicked, it will link to the correct github repo
    panel.addEventListener("click", () => {
      const panelId = panel.id;

      switch (panelId) {
        case "historyguessr":
          window.open(
            "https://github.com/Electrolytful/History-Guessr",
            "_blank"
          );
          break;
        case "portfolio":
          window.open(
            "https://github.com/Electrolytful/electrolytful.github.io",
            "_blank"
          );
          break;
        case "swiftrift":
          window.open("https://github.com/Electrolytful/Swift_Rift", "_blank");
          break;
        case "notesai":
          window.open(
            "https://github.com/Electrolytful/NotesAI_backend",
            "_blank"
          );
          break;
        case "florin":
          window.open(
            "https://github.com/Electrolytful/FlorinCouncil",
            "_blank"
          );
          break;
      }
    });

    // removing active class from panel if no longer hovered
    panel.addEventListener("mouseleave", () => {
      panel.classList.remove("active");
      panelDesc.classList.remove("show");
      panelDesc.innerHTML = "";
    });
  });
}
