function foodCats(n, b, m, t, r) {
    const cats = new Array(n).fill().map((_, i) => i + 1);
    const queue = [];
    let foodInBowl = m;
    let time = 0;
    let eatingCat = null;

    const logStatus = (message) => {
        console.log(`${time} секунд: ${message}`);
    };


    cats.forEach((cat) => {
        queue.push(cat);
        logStatus(`Кот №${cat} встал в очередь`);
    });

    while (queue.length > 0) {

        if (!eatingCat && foodInBowl >= b) {
            eatingCat = queue.shift();
            foodInBowl -= b;
            logStatus(`Кот №${eatingCat} подошел к миске`);
        }


        if (eatingCat) {
            time += 1;
            logStatus(`Кот №${eatingCat} ест`);
            if (time % t === 0) {

                logStatus(`Кот №${eatingCat} отошел от миски`);
                eatingCat = null;
            }
        }


        if (foodInBowl === 0) {
            logStatus("Бабушка наполняет миску");
            time += r;
            foodInBowl = m;
        }
    }

    logStatus(`Всего затрачено времени: ${time} секунд`);
}

console.log(foodCats(30, 5, 10, 5, 3));
