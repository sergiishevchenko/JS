class Options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    newDiv() {
        let node = document.createElement('div');
        let textnote = document.createTextNode('Yoohoohoo!');
        node.style.cssText = `
        height: ${this.height}px;
        width: ${this.width}px;
        background-color: ${this.bg};
        font-size: ${this.fontSize}px;
        text-align: ${this.textAlign};
        `;
        node.appendChild(textnote);
        document.body.appendChild(node);

    }
}
let first = prompt('Введите высоту!', '');
let second = prompt('Введите ширину!', '');
let third = prompt('Введите цвет!', '');
let fourth = prompt('Введите размер шрифта!', '');
let fifth = prompt('Введите выравнивание текста!', '');

const elem = new Options(first, second, third, fourth, fifth); // создаю новый объект класса

console.log(elem);

elem.newDiv(); // вызываю метод класса/