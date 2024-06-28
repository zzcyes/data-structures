 const display = (node)=>{
  if(!node){
    return null;
  }
  const collects = [];
  while(node){
    collects.push(node.element);
    node = node.next;
  }
  return collects.join("->");
}

module.exports = {
  display
};