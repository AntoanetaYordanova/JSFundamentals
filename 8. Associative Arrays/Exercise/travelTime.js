function travelTime(input) {
    let countries = {};

    for(let destination of input) {
        let [country, town, price] = destination.split(' > ');
        price = Number(price);

        if(!countries.hasOwnProperty(country)) {
            countries[country] = {towns : {}}
        }

        if(countries[country].towns.hasOwnProperty(town)) {
            if(countries[country].towns[town] > price) {
                countries[country].towns[town] = price;
            } 
        } else {
            countries[country].towns[town] = price;
        }
        
    }

    let sortedCountries = Object.keys(countries) .sort((a,b) => a.localeCompare(b));
    
    for(let country of sortedCountries) {
        let print = country + ' -> ';
        let countryEntries = Object.entries(countries[country]['towns']);
        let sortedTowns = countryEntries.sort((a,b) => a[1] - b[1]);

        for(let town of sortedTowns) {
            let [name, price] = town;
            print += name + ' -> ' + price + ' ';
        }

        console.log(print);
    }
}

travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
    ]
    )