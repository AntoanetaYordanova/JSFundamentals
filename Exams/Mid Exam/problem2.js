function favouriteGenres(input) {
    let genres = input.shift() .split(' | ');
    
    for(let str of input) {
        let commandArr = str.split(' ');

        if(commandArr[0] === 'Stop!') {
            break;
        } else if (commandArr[0] === 'Join') {
            let genre = commandArr[1];

            if(!genres.includes(genre)) {
                genres.push(genre);
            }
        } else if (commandArr[0] === 'Drop') {
            let genre = commandArr[1];

            if(genres.includes(genre)) {
                let index = genres.indexOf(genre);
                genres.splice(index, 1);
            }

        } else if (commandArr[0] === 'Replace') {
            let oldGenre = commandArr[1];
            let newGenre = commandArr[2];
            if(genres.includes(oldGenre) && !genres.includes(newGenre)) {
                let index = genres.indexOf(oldGenre);
                genres[index] = newGenre;
            }
        }
    }

    console.log(genres.join(' '));
}

// favouriteGenres([ 'Romance | Fiction | Horror | Mystery', 'Drop Romance', 'Join Fantasy', 'Stop!']);
favouriteGenres(['Romance | Fiction | Horror | Mystery','Drop Romance','Join Fantasy','Stop!']);
// favouriteGenres([ 'Thriller | Young | Crime', 'Join Political', 'Replace Young Fairytale', 'Stop!']);