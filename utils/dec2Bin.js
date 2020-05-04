export default function dec2bin(dec) {
  let prefix = "00000000";
  dec = dec.toString(2);
  return prefix.slice(dec.length) + dec;
}
