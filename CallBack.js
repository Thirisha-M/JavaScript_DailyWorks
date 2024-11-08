
function orderFood(dish, callback) {
    console.log(`Ordering ${dish}...`);
    setTimeout(() => {
        console.log(`${dish} is ready!`);
        callback(dish);
    }, 2000);
}
function serveFood(dish) {
    console.log(`Serving ${dish}. Enjoy your meal!`);
}
orderFood("Pizza", serveFood);
