type Attribution = {
  url: string;
  label: string;
}

export const drawAttributions = (attributions: Attribution[]) => {
  const container = document.createElement("div");
  Object.assign(container.style, {
    position: "fixed",
    bottom: "0",
    right: "0",
    display: "flex",
    flexDirection: "row",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    color: "#fff",
    fontFamily: "Arial, Helvetica, sans-serif",
    fontSize: "12px",
    lineHeight: "1",
    letterSpacing: "0.02em",
    zIndex: "1000",
    padding: "2px 4px",
  });

  attributions.forEach((attr, i) => {
    const a = document.createElement("a");
    a.href = attr.url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.textContent = attr.label;
    Object.assign(a.style, {
      color: "#fff",
      textDecoration: "none",
      padding: "4px 8px",
      borderLeft: i === 0 ? "none" : "1px solid rgba(255, 255, 255, 0.4)",
      whiteSpace: "nowrap",
    });
    a.addEventListener("mouseenter", () => { a.style.textDecoration = "underline"; });
    a.addEventListener("mouseleave", () => { a.style.textDecoration = "none"; });
    container.appendChild(a);
  });

  document.body.appendChild(container);
};
