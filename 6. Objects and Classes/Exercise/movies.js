function movies(inputArr) {
  let moviesListArr = [];

  for (let currentMovie of inputArr) {
    let currentMovieArr = currentMovie.split(" ");
    if (currentMovieArr.includes("addMovie")) {
      currentMovieArr.shift();
      let title = currentMovieArr.join(" ");
      let obj = {};
      obj.name = title;
      moviesListArr.push(obj);
    } else if (currentMovieArr.includes("directedBy")) {
      let index = currentMovieArr.indexOf("directedBy");
      let title = currentMovieArr.slice(0, index).join(" ");
      let director = currentMovieArr.slice(index + 1).join(" ");

      for (let currentMovie of moviesListArr) {
        if (currentMovie.name === title) {
          currentMovie.director = director;
        }
      }
    } else if (currentMovieArr.includes("onDate")) {
      let index = currentMovieArr.indexOf("onDate");
      let title = currentMovieArr.slice(0, index).join(" ");
      let date = currentMovieArr.slice(index + 1).join(" ");

      for (let currentMovie of moviesListArr) {
        if (currentMovie.name === title) {
          currentMovie.date = date;
        }
      }
    }
  }


  for (let movieObj of moviesListArr) {
    let hasTitle = false;
    let hasDirector = false;
    let hasDate = false;
  
    if (movieObj.name !== undefined) {
      hasTitle = true;
    }
    if (movieObj.director !== undefined) {
      hasDirector = true;
    }
    if (movieObj.date !== undefined) {
      hasDate = true;
    }

    if(hasTitle && hasDirector && hasDate ){
        let printJSON = JSON.stringify(movieObj);
        console.log(printJSON);
    }
  }
}

movies([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis Ford Coppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Batman onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
  "addMovie Toni"
]);
