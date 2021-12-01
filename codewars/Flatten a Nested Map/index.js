function flattenMap(map) {
  let to_return = {};
  for(const k in map) {
    if (map[k] && typeof map[k] === "object" && !Array.isArray(map[k])) {
      let flatObj = flattenMap(map[k]);
      for (let i in flatObj) {
        to_return[k + "/" + i] = flatObj[i];
      }
    } else {
      to_return[k] = map[k] || null
    }
  }
  return to_return;
}

