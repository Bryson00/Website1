panels = document.querySelectoryAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList('active')
    })
})



function removerActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}
