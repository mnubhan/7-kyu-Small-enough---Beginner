function smallEnough(a, limit){
  const result =  a.filter(x=>x>limit).length
  return result === 0 ? true :false
}

function smallEnough(a, limit){
  return Math.max(...a) <= limit
}

smallEnough = (a, l) => a.every(e => e <= l)

function smallEnough(a, limit){
  return a.every(x => x <= limit);
}
