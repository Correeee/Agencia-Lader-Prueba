

window.addEventListener('scroll', (e) => {
    let scrollX = window.scrollY || window.pageXOffset
    const navBackground = document.getElementsByClassName('header__background')[0]
    if (scrollX > 822) {
        navBackground.style.display = 'flex'
    } else {
        navBackground.style.display = 'none'
    }
})
