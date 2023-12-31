let pokemonRepository = (function() {
    let pokemonList = [
        {
        name:'Bulbasaur', 
        height: '0.7', 
        types:['Grass','poison']
        },
        {
        name:'Charmander', 
        height: '1.7', 
        types:['Fire']
        },
        {
        name:'Squirtle', 
        height: '1', 
        types:['Water']
        },
    ] // Type format = name: 'string'; height: number; types: [arrayItem1, arrayItem2];
    function add(pokemon) {
        pokemonList.push(pokemon);
    }
    function getAll() {
        return pokemonList;
    }
    return {
        getAll: getAll,
        add: add
    };
})();
/*console.log(pokemonRepository.getAll());*/
pokemonRepository.add({name:'Pikachu', height: '0.4', types:['Electric']});
pokemonRepository.getAll().forEach(function(pokemon){
    document.write(pokemon.name + ' (height: ' + pokemon.height + ')');
    if (pokemon.height > 1.5) {
        document.write(' - Wow, that\'s big!');
    }
    document.write('<br>');
});