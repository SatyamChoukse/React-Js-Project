function customRender(reactElement,container){
    // const domElement = document.createElement(reactElement.typeof)
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href', reactElement.props.href)
    // domElement.setAttribute('target', reactElement.props.target)

    // container.appendChild(domElement);

    const domElement = document.createElement(reactElement.typeof)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if(prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop]);
    }

    container.appendChild(domElement);

}

const reactElement = {
    typeof : 'a',
    props : {
        href:'https://googel.com',
        target:'_blank'
    },
    children : 'Open Google'
}

const container = document.querySelector('#root')

customRender(reactElement,container);