export const updateExplorerData = (originalData, updateRequestData) => {
  if (originalData.id === updateRequestData.parentId) {
    if (updateRequestData.isFolder) {
      originalData.items.unshift({
        id: Date.now(),
        name: updateRequestData.name,
        isFolder: true,
        items: [],
      });
    } else {
      originalData.items.push({
        id: Date.now(),
        name: updateRequestData.name,
        isFolder: false,
        items: [],
      });
    }
  } else {
    originalData.items.map((oData) => {
      return updateExplorerData(oData, updateRequestData);
    });
  }
};
