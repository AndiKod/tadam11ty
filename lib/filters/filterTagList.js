
module.exports = (collection) => {
  return (tags || []).filter(tag => ["all", "nav", "post", "posts"].indexOf(tag) === -1);
}
