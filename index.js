const peliculasContainer=document.querySelector('main.peliculas');
document.querySelector('.buscarInput')
.addEventListener('keyup',event=>{
    if(event.key === 'Enter'){
        fetch('https://api.themoviedb.org/3/search/movie?api_key=cea68b520beecac6718820e4ac576c3a&language=es-ES&query='+event.target.value)
        .then(res=>res.json())
        .then(res=>{
            const peliculas =res.results;
            peliculasContainer.innerHTML='';
            const baseImgUrl= 'https://image.tmdb.org/t/p/w185';
            peliculas.forEach(pelicula=>{
                const imagen = pelicula.poster_path ? `
                <img src="${baseImgUrl}${pelicula.poster_path}" alt="">`:''
                peliculasContainer.innerHTML+=`
                <div class="pelicula">
                    <h3 class="title">${pelicula.title}
                </h3>
                ${imagen}
            </div>`
            })
        })

        // axios.get('https://api.themoviedb.org/3/search/movie?api_key=cea68b520beecac6718820e4ac576c3a&language=es-ES&query='+event.target.value)
        // .then(res=>{
        //     const peliculas =res.data.results;
        //     peliculasContainer.innerHTML='';
        //     const baseImgUrl= 'https://image.tmdb.org/t/p/w185';
        //     peliculas.forEach(pelicula=>{
        //         const imagen = pelicula.poster_path ? `
        //         <img src="${baseImgUrl}${pelicula.poster_path}" alt="">`:''
        //         peliculasContainer.innerHTML+=`
        //         <div class="pelicula">
        //             <h3 class="title">${pelicula.title}
        //         </h3>
        //         ${imagen}
        //     </div>`
        //     })
        // })
    }
})