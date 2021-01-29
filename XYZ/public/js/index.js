document.getElementById('desktop_menu').addEventListener("click", (e) => {
    document.getElementById('mobile_menu').style = "";
});
document.getElementById('btn_mobile_menu').addEventListener("click", (e) => {
    document.getElementById('mobile_menu').style.display = "none";
});