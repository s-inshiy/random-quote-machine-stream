export function getRandomNumber(number) {
  return Math.floor(Math.random() * number);
}

export function getRandomColor() {
  const color = Math.floor(
    Math.random() * 16777215
  )
    .toString(16)
    .padStart(6, '0');
  return `#${color}`;
}
