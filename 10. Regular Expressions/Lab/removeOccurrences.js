function removeOccurrences(remove, str) {
    while(str.includes(remove)) {
      str = str.replace(remove, '')
    }

    console.log(str);
}

removeOccurrences('ice', 'kicegiciceeb')