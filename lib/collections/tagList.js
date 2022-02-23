module.exports = (collection) => {
  // Create an array of all tags
  let tagSet = new Set();
  collection.getAll().forEach(item => {
    (item.data.tags || []).forEach(tag => tagSet.add(tag));
  });

  return filterTagList([...tagSet]);
}
