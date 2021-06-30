const toKV = (attrs: { [k: string]: string }) => Object.keys(attrs).map((a: string) => ` ${a}="${attrs[a]}"`).join(",");
const group = (list: any) => list.join('');
const get_content = (content: any) => typeof content === 'object' ? group(content) : content;

export const tag_open = (name: string = '', attrs: { [k: string]: any } = {}) => `<${name}${toKV(attrs)}>`;
export const tag = (name: string = '', attrs: { [k: string]: any } = {}, content: any) => `${tag_open(name, attrs)}${get_content(content)}</${name}>`;

export const br = () => tag_open('br');
export const img = (url: string = '') => tag_open('img', {src: url});
export const ul = (attrs: { [k: string]: any } = {}, content: any = '') => tag('ul', attrs, content);
export const li = (attrs: { [k: string]: any } = {}, content: any = '') => tag('li', attrs, content);
export const div = (attrs: { [k: string]: any } = {}, content: any = '') => tag('div', attrs, content);
export const a = (url: string = '', content: any = '') => tag('a', {href: url}, content);
