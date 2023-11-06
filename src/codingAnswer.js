function printstars(num) {
    for (let i = num; i >= 1; i--) {
      let row = '';
      for (let j = 1; j <= i; j++) {
        row += '* ';
      }
      console.log(row);
    }
  }
  
  const num = 5;
  printstars(num);