loadtext = document.queryselector('.loading-text')
bg = document.queryselectory('.bg')

load = 0

int = setInterval(blurring, 30)

function blurring() {
    load++

    if (load > 99){
        clearInterval(int)
    }
    loadText.innerText = `${load}%`
    loadText.style.opacity = 1 - load/100
    bg.style.filter = `blur(${30 - 30(load/100)}px)`
}
