export default function dec2bin6(dec) {
  let prefix = "000000";
  dec = dec.toString(2);
  return prefix.slice(dec.length) + dec;
}
