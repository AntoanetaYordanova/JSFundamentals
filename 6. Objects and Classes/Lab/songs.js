function songs(inputArr) {
    let songsNum = inputArr.shift();
    let typeToPrint = inputArr.pop();
    let songList = [];

    class Song{
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }

    for(let currentArr of inputArr) {
        let [type, name, time] = currentArr.split('_');
        time = Number(time);

        songList.push(new Song(type, name, time));
    }

    for(let obj of songList) {
        if(typeToPrint === 'all') {
            console.log(obj.name);
        } else if(obj.type === typeToPrint) {
            console.log(obj.name);
        }
    }
}

// songs([3,'favourite_DownTown_3:14','favourite_Kiss_4:16','favourite_Smooth Criminal_4:01','favourite']);

songs([4,'favourite_DownTown_3:14','listenLater_Andalouse_3:24','favourite_In To The Night_3:58','favourite_Live It Up_3:48','listenLater'])