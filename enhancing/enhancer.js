module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if(item.enhancement >= 20){
    return {...item};
  } else {
    item.enhancement++;
    return { ...item };
  }
}

function fail(item) {
  if(item.enhancement < 15){ // item failed while bellow 15 enchancement
    item.durability = item.durability - 5;
    if(item.durability < 0 ){ // Durability cannot be bellow 0
      item.durability = 0;
    }
    return { ...item };

  } else if (item.enhancement >= 15 ) {  // item failed while 15 or above enchancement
    item.durability = item.durability - 10;
    if(item.durability < 0 ){ // Durability cannot be bellow 0
      item.durability = 0;
    }
    if(item.enhancement > 16){ //lowering enhancement 
      item.enhancement--;
    }
    return {...item};
  }
}

function repair(item) {
  if(item.durability > 100){
    return {...item};
  }
  item.durability = 100;
  return {...item};
}

function get(item) {
  return { ...item };
}
