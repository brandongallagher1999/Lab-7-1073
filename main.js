

function updateTable()
{
    let table = document.getElementById("movieTable").children[1];
    table.innerHTML = "";
    let counter = 0;
    

    for (let mov of movieList.displayMovies())
    {
        let obj = mov.display();
        let row = table.insertRow(counter);
        let column0 = row.insertCell(0);
        let column1 = row.insertCell(1);
        let column2 = row.insertCell(2);

        column0.innerHTML = obj.name;
        column1.innerHTML = obj.mainActor;
        column2.innerHTML = obj.length;

        counter++;
    }
}

function add()
{
    let movieName = document.getElementById("movieName").value;
    let mainActor = document.getElementById("mainActor").value;
    let length = document.getElementById("length").value;

    let tempMovie = new Movie(movieName, mainActor, length);
    movieList.addMovie(tempMovie);

    updateTable();
}




class Movie
{
    constructor(name, mainActor, length)
    {
        this.name = name;
        this.mainActor = mainActor;
        this.length = length;
    }

    display()
    {
        return {
            name : this.name,
            mainActor : this.mainActor,
            length : this.length
        }
    }
}


class MovieList
{

    constructor()
    {
        this.movieArr = [];
    }

    addMovie(movie)
    {
        this.movieArr.push(movie);
    }

    displayMovies()
    {
        return this.movieArr;
    }

}
var movieList = new MovieList();