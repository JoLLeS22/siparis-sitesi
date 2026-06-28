function order() {
    let name = document.getElementById("name").value;
    let address = document.getElementById("address").value;

    if (name === "" || address === "") {
        document.getElementById("result").innerText =
            "Lütfen tüm alanları doldur!";
        return;
    }

    document.getElementById("result").innerText =
        "Sipariş alındı ✔️ " + name + " - " + address;
}
