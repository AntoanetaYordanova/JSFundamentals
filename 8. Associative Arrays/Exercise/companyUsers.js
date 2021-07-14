function companyUsers(input) {
    let companies =  {};

    for(let company of input) {
        let [name, id] = company.split(' -> ');

        if(!companies.hasOwnProperty(name)) {
            companies[name] = [id];
        } else {
            if(!companies[name].includes(id)) {
                companies[name].push(id);
            }
        }

    }

    let sortedCompanies = Object.keys(companies) .sort((a,b) => a.localeCompare(b));
    
    for(let company of sortedCompanies) {
        console.log(company);
        let users = companies[company];
        for(let user of users) {
            console.log(`-- ${user}`);
        }
    }
}

companyUsers(['SoftUni -> AA12345','SoftUni -> BB12345','Microsoft -> CC12345','HP -> BB12345']);