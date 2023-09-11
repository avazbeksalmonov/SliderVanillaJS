const slider = document.querySelector(".slider"),
    active = document.querySelector("#active"),
    line1 = document.querySelector("#line1"),
    line2 = document.querySelector("#line2"),
    line3 = document.querySelector("#line3"),
    line4 = document.querySelector("#line4");
(wrapper = document.querySelector(".wrapper")),
(jsColor = document.querySelectorAll(".js-color"));

line1.addEventListener("click", () => {
    slider.style.transform = "translateX(0)";
    active.style.top = "0";
    wrapper.style.background = "#FFF600FF";
    jsColor.forEach((element) => {
        element.style.color = "#000";
    });
});
line2.addEventListener("click", () => {
    slider.style.transform = "translateX(-25%)";
    active.style.top = "80px";
    wrapper.style.background = " #0066FFFF";
});
line3.addEventListener("click", () => {
    slider.style.transform = "translateX(-50%)";
    active.style.top = "160px";
    wrapper.style.background = "#1EFF56FF";
    jsColor.forEach((element) => {
        element.style.color = "#000";
    });
});
line4.addEventListener("click", () => {
    slider.style.transform = "translateX(-75%)";
    active.style.top = "240px";
    wrapper.style.background = "#FF3240FF";
});