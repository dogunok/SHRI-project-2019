const SEARCH_FILE = {
  type: 'SEARCH_FILE',
  nameFile: ''
};

function searchFile(name) {
  return {
    type: 'SEARCH_FILE',
    nameFile: name
  };
}