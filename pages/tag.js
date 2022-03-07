const tag = (element, AllData) => {
    const data = AllData.slice(0, 12);
    let main = document.createElement("div");
  
    data.map((e) => {
      let div = document.createElement("div");
      div.classList.add("tagDiv");
      div.style.background = "#" + e.accent;
      let posts = e.total_items;
      div.innerHTML = `
      <img src="https://i.imgur.com/${e.background_hash}.jpg?maxwidth=800&shape=thumb&fidelity=high"/>
       <div>
        <h1>
        ${e.display_name}
        </h1>
        <p>${posts} Posts </p>
       </div>
      `;
      main.append(div);
    });
  
    element.append(main);
  };
  
  export default tag;
  