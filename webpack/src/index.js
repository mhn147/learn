import nav from "./foo/nav";
// import { footer } from "./footer/footer";
const getFooter = () => import("./footer/footer");
import "./footer/footer.css";
import makeButton from "./button/button";
import "./button/button.css";
import { makeColorStyle } from "./button/button.styles";
import makeImage from "./assets/image";
import imageUrl from "./assets/icon.jpg"
// import Foo from "./foo/foo.ts"

const button = makeButton("Yay! A button");
button.style = makeColorStyle("green");
document.body.appendChild(button);

document.addEventListener("click", e => {
    getFooter()
        .then(footerModule => {
            document.body.appendChild(footerModule.footer);
        })
});

const img = makeImage(imageUrl);
document.body.appendChild(img);
