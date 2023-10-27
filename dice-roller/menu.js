function menu(obj) {
    let menuArr = Object.keys(obj);
    // return menuArr;
    let menuList = "";
    for (let i = 0; i < menuArr.length; i++) {
        menuList += `${i+1}. ${menuArr[i]}\n`;
    }
    menuList = menuList.slice(0, -1);
    return menuList;
}

module.exports = menu;