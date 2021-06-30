import {a, br, div, img, tag} from "./mod.ts"

const output = div({id: 'd1'}, [
    a("/", [img("image.png")]),
    br(),
    a("/", [img("image.png")]),
    tag("fancy",{id:'fancy'},"So fancy!")
]);
console.log(output);
