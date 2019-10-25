let btn = document.getElementById("buttonCheckDomain");
let spanText = document.getElementById("nameDomainFree");
let inputText = document.getElementById("inputCheckDomain");
let domainForm = document.getElementById("domainForm")
let formCheckDomain = document.getElementsByClassName("domain-free")
let features = document.getElementsByClassName("features")


btn.onclick = function() {
    if (inputText.value) {
        spanText.innerHTML = inputText.value;
    }
    formCheckDomain[0].style.opacity = .9;
    console.log(formCheckDomain[0].style)
}

for (let i = 0; i < features.length; i++) {
    features[i].addEventListener("click", (e) => {
        let featuresTexts = document.getElementsByClassName("features-text");

        let visible;
        for (let j = 0; j < featuresTexts.length; j++) {
            if (featuresTexts[j].style.display == "block") {
                visible = featuresTexts[j];
                break;
            }
        }

        if (visible) {
            visible.style.display = "none";
        }

        if (visible !== features[i].children[1]) {
            features[i].children[1].style.display = "block";
            features[i].children[1].style.marginLeft = -features[i].offsetLeft + features[0].offsetLeft + "px";
            // console.log(features[i].children[1]);
        }
        // console.log(e.target.children[1]);
    })
}