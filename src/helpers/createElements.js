/* eslint-disable no-undef */
/*
 *This function creates and return array of node elements*
 *It takes title of element, title of parent and array of information*
 *Each element gets text content and class name from enter collection*
 */
export default createElements = (titleOfParent, titleOfElement, dataObject) =>
  Object.entries(dataObject).map(([key, value]) => {
    const nodeElement = document.createElement(titleOfElement);
    nodeElement.className = `${titleOfParent}__${titleOfElement}-${key}`;
    nodeElement.textContent = value;
    return nodeElement;
  });
