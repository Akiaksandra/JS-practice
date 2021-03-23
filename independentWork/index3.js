/*2. Убрать повторяющиеся слова
Необходимо написать функцию, которая принимает один аргумент – массив со списком слов и возвращает строку, которая не содержит повторяющихся слов, и все слова в этой строке приведены к нижнему регистру. Все слова в итоговой строке должны быть разделены запятой и пробелом.
Например:
normalizeWords(['web', 'JavaScript', Senla, 'script', 'programming'])
должна вернуть строку: "web, javascript, script, programming" (все слова в нижнем регистре, разделяются запятой и пробелом, нет повторяющихся слов)
 */

const normalizeWords = (arr) => {
    //Вариант 1
    let lowArr = arr.map(item => item.toLowerCase());

    let result = [...new Set(lowArr)];
    //ИЛИ
    // let result = Array.from(new Set(lowArr));

    //Вариант 2 (менее читабельный)
    // let result = arr.reduce((res, item) => {
    //     let lowItem = item.toLowerCase();
    //     return res.includes(lowItem) ? res : [...res, lowItem];
    // }, []);
    
    return result;
}
console.log(normalizeWords(['WEB', 'web', 'JavaScript', 'script', 'wEb', 'scripT', 'programming']));

