function menu(obj) {
    let menuArr = Object.keys(obj);
    // return menuArr;
    let menuList = "";
    for (let i = 0; i < menuArr.length; i++) {
        menuList += `\n${i+1}. ${menuArr[i]}`;
    }
    return menuList;
}

module.exports = menu;