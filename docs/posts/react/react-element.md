### ReactElement

```jsx
function createElement(type, config, ...children) {
    const props = {}
    let key = null
    let ref = null
    for(let propName in config) {
        props[propName] = config[propName]
    }
    const childLength = children.length
    if(childLength === 1) {
        props.children = children
    }else if(childrenLength > 1) {
        const childArray = new Array(childrenLength);
        for (let i = 0; i < childrenLength; i++) {
            childArray[i] = arguments[i + 2];
        }
        props.children = childArray
    }
    if(type && type.defaultProps) {
        const defaultProps = type.defaultProps;
        for (propName in defaultProps) {
            if (props[propName] === undefined) {
                props[propName] = defaultProps[propName];
            }
        }
    }
    return ReactElement(
        type,
        key,
        ref,
        props,
    )
}

const ReactElement = function(type, key, ref, props) {
    const element = {
        $$typeof: REACT_ELEMENT_TYPE,
        type,
        key,
        ref,
        props
    }
    return element
}
```