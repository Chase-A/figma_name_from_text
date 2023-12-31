const selection = figma.currentPage.selection

if (selection.length === 0){
  figma.notify('nothing selected')
}
else {
  for (let node of selection) {
    if (node.type === 'FRAME'){
      const children = node.children
      for (let child of children) {
        if ('characters' in child) {
          if (!node.name.includes(child.characters)){
            node.name = node.name + (node.name[-1] === '_' ? '': '_') + child.characters
          }
          break
        }
      }
    }
  }
}

figma.closePlugin();
