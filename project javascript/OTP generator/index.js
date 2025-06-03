let coding = document.querySelectorAll(".code")
coding[0].focus()

coding.forEach((coding, idx) => {
    coding.addEventListener("keydown", (e) => {
        console.log(e.key);
    })
});