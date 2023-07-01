const selection = figma.currentPage.selection

console.log(selection)
for (let node of selection) {
  if (node.type === 'FRAME'){
    const children = node.children
    for (let child of children) {
      if ('characters' in child) {
        console.log(child.characters)
        node.name = child.characters
        break
      }
    }
  }
}

figma.closePlugin();
