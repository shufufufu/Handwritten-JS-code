function transToPaths(node, path = "", result = {}) {
  const currentPath = path ? `${path}/${node.name}` : node.name;

  result[currentPath] = node.children ? false : true;

  if (node.children) {
    node.children.forEach((child) => transToPaths(child, currentPath, result));
  }

  return result;
}
