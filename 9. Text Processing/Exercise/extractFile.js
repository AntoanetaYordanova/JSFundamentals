function extractFile(input) {
    let arr = input.split('\\')

    let file = arr[arr.length-1].split('.');
    let fileExtension = file.pop();
    let fileName = file.join('.');

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtension}`);
}

extractFile('C:\\Internal\\training-internal\\Template.pptx.css');
console.log('------');
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs')