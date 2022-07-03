function DirectoryEntry(fullPath, type) {

  const basename = function(path){
    return path.split('/').pop();
  };

  const dirname = function(path){
    return path.split('/').slice(0, -1).join('/') || '.'; 
  };

  this.path = fullPath;
  this.name = basename(fullPath);
  this.dir = dirname(fullPath);
  this.type = type;
}

export { DirectoryEntry as default };
