const mainContainer = document.querySelector("#root");
const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "click me to visit google",
};

function customRender(reactElement, mainContainer) {
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  // domElement.setAttribute ('target', reactElement.props.target)
  // domElement.setAttribute ('href', reactElement.props.href)
  for (const prop in props) {
    if (prop == "children") continue;
    domElement.setAttribute(prop, reactElement.props[prop]);
  }

  mainContainer.appendChild(domElement);
}

customRender(reactElement, mainContainer);
