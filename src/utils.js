export default function getRandomInRange(min = 0, max = 0) {
  return Math.floor(min + Math.random() * (max - min + 1));
}
