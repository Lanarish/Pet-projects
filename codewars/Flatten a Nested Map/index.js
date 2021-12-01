function flattenMap(map) {
  let to_return = {};
  for (let k of Object.keys(map)) {
    if (map[k] && typeof map[k] === "object" && !Array.isArray(map[k])) {
      let flatObj = flattenMap(map[k]);
      for (let i in flatObj) {
        to_return[k + "/" + i] = flatObj[i];
      }
    } else {
      if (map[k]) {
        to_return[k] = map[k];
      } else {
        to_return[k] = null;
      }
    }
  }
  return to_return; 
}
