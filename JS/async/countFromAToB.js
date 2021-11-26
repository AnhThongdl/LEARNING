countFrom = (a, b) => {
    return new Promise((resolve, reject) => {
        setInterval(function() {
            console.log(a++);
            if (a > b) {
                clearInterval(this);
                resolve();
            }
        }, 1000)
    })
} 

countFrom(1, 5).then(() => {
    console.log('Done');
});