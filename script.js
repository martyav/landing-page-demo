function selectOption() {
    let menu = document.getElementById("menu");
    let selected = menu.value

    window.location.href = `#${selected}`;
    console.log(selected);
}