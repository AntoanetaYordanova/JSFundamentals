function towns(inputArr) {

    for(let currentTown of inputArr) {
        let [town, latitude, longitude] = currentTown.split(' | ');  
        
        let townObj = {
            town,
            latitude : latitude = Number(latitude).toFixed(2),
            longitude : longitude = Number(longitude).toFixed(2)
        };

        console.log(townObj);
    }
}

towns(['Sofia | 42.696552 | 23.32601','Beijing | 39.913818 | 116.363625']);