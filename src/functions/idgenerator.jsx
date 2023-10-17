export default function idGenerator(length) {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "1234567890";
  const map = Array.from(letters.toUpperCase() + letters + numbers);

  const idarr = [];

  for (let i = 0; i <= length - 1; i++) {
    const randnum = () => Math.floor(Math.random() * (map.length + 1));
    idarr.push(map[randnum()]);
  }

 if(Number(length) <= 70) {
   return idarr.join("").toString("hex");
 }
 else {
  return null
 }
}
