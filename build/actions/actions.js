const SEARCH_FILE = {
  type: 'SEARCH_FILE',
  nameFile: ''
};

module.exports = function searchFile(name) {
  return {
    type: 'SEARCH_FILE',
    nameFile: name
  };
};