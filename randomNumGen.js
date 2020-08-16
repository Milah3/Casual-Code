setInterval(
    function () {
        let x = Math.floor(Math.random() * 100);
            y = Math.floor(Math.random()*100);
        if (x == y) {
            console.log('Congrations! You picked the lucky number! You\'ve won!');
            return;
        }
        else
            console.log('X:\t' + x);
            console.log('Y:\t' + y + '\n');
    }, 1000);