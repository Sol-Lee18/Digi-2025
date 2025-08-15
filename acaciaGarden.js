const searchBar = document.querySelector('.searchInput')
console.log(searchBar)

searchBar.addEventListener('keyup', (e) => {
   console.log(e.target.value)
})