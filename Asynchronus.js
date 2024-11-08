
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function makeCoffee() {
    console.log("Starting to make coffee...");
    await delay(2000);
    console.log("Grinding coffee beans...");

    await delay(3000); 
    console.log("Boiling water...");

    await delay(2000);
    console.log("Brewing coffee...");

    console.log("Coffee is ready!");
}
makeCoffee();
