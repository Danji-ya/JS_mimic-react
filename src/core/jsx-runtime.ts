type TAttribute = Record<string, any>;

function jsx(name: string, attributes: TAttribute, ...children: any[]) {
  console.log(name, children);
  const node = document.createElement(name);

  Object.entries(attributes || {}).forEach(([key, value]) => {
    node.setAttribute(key, value);
  });

  // 자식 노드들 처리
  (children || []).forEach((childNode) => addChild(node, childNode));

  return node;
}

function addChild(parent: DocumentFragment | HTMLElement, childNode: any): any {
  // object 형식일 때 이미 하위에서 node로 만들어진 것
  if (typeof childNode === "object") {
    return parent.appendChild(childNode);
  }

  // string, number
  parent.appendChild(document.createTextNode(childNode));
}

export default jsx;