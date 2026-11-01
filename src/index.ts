// Файл для перевірки налаштованого середовища TypeScript.
// Якщо компіляція проходить успішно і поряд з dist/index.js
// зʼявляється dist/index.js.map — source maps налаштовані правильно.

function greet(name: string): string {
  return `Hello, ${name}! TypeScript середовище налаштовано.`;
}

const message: string = greet('GoIT');
console.log(message);
