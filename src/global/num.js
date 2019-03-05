export default {
  toDecimal(x,flag) {
    let f = parseFloat(x);
    if (isNaN(f)) {
      return false;
    }
    let m = Math.round(x * 100) / 100;
    var s = m.toString();
    var rs = s.indexOf('.');
    if (rs < 0) {
      rs = s.length;
      s += '.';
    }
    while (s.length <= rs + 2) {
      s += '0';
    }
    if(flag === 1){
      return s;
    }else{
      return s + '%'
    }
  }
}