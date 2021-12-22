const { Productos } = require("./Productos");

let is_ok = true;

const CustomFetch = () => {
    return new Promise ((resolve, reject) => {
    if (is_ok) {
        setTimeout (() => {
            resolve(Productos);
        }, 2000);
    } else {
        reject ("ko");
    }
    })
}

export default CustomFetch;