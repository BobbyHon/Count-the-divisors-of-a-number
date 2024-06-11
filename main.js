function getDivisorsCnt(n){
    let answer = 0
  
    for (let i = 1; i < Math.pow(n, 1/2) + 1; i++){
      if (!((n / i) % 1)){
        if (i * i == n) ++answer
        else if (i * i < n){
          ++answer
          ++answer
        }
      }
    }
    return answer
  }