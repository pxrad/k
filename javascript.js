function toogleNavbar() {
    let navbar = document.getElementById('navbar')

    console.log(navbar.style.display)
    if(navbar.style.display == '' || navbar.style.display == 'none'){
        navbar.style.display = 'flex'
    }
    else{
        navbar.style.display = 'none'
    }
}

// select experience tab
function selectExperienceTab(experienceTab) {
    let active = document.querySelector('.active')
    let tabActive = document.querySelector('.tab-active')
    let experienceItemActive = document.querySelector('.experience-item-active')

    if (active) active.classList.remove('active')
    let selectedTabItem = document.getElementById('tab-' + experienceTab + '-item')
    selectedTabItem.classList.add('active')

    if (tabActive) tabActive.classList.remove('tab-active')
    let selectedTab = document.getElementById('tab-' + experienceTab)
    selectedTab.classList.add('tab-active')

    if (experienceItemActive) experienceItemActive.classList.remove('experience-item-active')
    let selectedItem = document.getElementById('item-' + experienceTab)
    selectedItem.classList.add('experience-item-active')
}