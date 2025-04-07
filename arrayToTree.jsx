function arrayToTree(array) {
  const map = new Map();
  const roots = [];
  array.forEach((item) => {
    map.set(item.id, { ...item, children: [] });
  });
  array.forEach((item) => {
    if (item.parent === null) {
      roots.push(map.get(item.id));
    } else {
      const parent = map.get(item.parent);
      if (parent) {
        parent.children.push(map.get(item.id));
      }
    }
  });
  return roots;
}

arrayToTree([
  { id: 1, value: 1, parent: null },
  { id: 2, value: 2, parent: 1 },
  { id: 3, value: 3, parent: 2 },
  { id: 4, value: 4, parent: 1 },
]);
