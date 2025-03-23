function checkOrder() {
    var cream = document.getElementById("cream").checked;
    var sugar = document.getElementById("sugar").checked;
    var orderText = "";

    if (!cream && !sugar) {
        orderText = "You ordered a cup of black coffee";
    } else if (cream && !sugar) {
        orderText = "You ordered a cup of coffee with cream";
    } else if (!cream && sugar) {
        orderText = "You ordered a cup of coffee with sugar";
    } else {
        orderText = "You ordered a cup of coffee with cream and sugar";
    }

    document.getElementById("order").textContent = orderText;
}
