function sortAnArrayByTwoCriteria(inputArr) {
    let sortedArr = inputArr.sort(function sorting(a, b)  {
        let firstLength = a.length;
        let secondLength = b.length;

        if(firstLength !== secondLength) {
            if(firstLength < secondLength) {
                return -1;
            } else {
                return 1;
            }
        } else {
          if(a < b) {
              return -1;
          } else {
            return 1;
          }
        }
    });

    console.log(sortedArr);
}
  

sortAnArrayByTwoCriteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]);