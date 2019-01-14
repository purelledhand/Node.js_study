const scores = [10, 30, 80.5, 100, 78];

const average = (list, listLen, ac) => {
    ac += list[listLen];
    console.log(ac);
    if(listLen === 0) return ac/list.length;
    return average(list, listLen-1, ac);
};

console.log('average : ', average(scores, scores.length-1, 0));