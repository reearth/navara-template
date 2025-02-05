const pages: string[] = PAGES;
document.querySelector<HTMLDivElement>('body')!.innerHTML = `
  <div style="margin: 10px 20px;">
    <h1>Index</h1>
    <ul>
      ${pages.map(e => `<li><a href="/${e}">${e}</a></li>`).join("")}
    </ul>
  </div>
`;
