const makeImage = (url) => {
    const imgElm = document.createElement("img");

    imgElm.src = url;
    imgElm.height = "100";
    imgElm.width = "100";

    return imgElm;
}

export default makeImage;