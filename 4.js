function count(a, b) {
    let timeOut = setInterval( function() {
        console.log(a++);
        if (a > b) {
            clearInterval(timeOut); 
        };
      }, 1000)
};

count (5, 15);
