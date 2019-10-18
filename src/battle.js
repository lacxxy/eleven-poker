function dealNum(num) {
    let res;
    switch (num) {
        case 'J':
            res = 11;
            break;
        case 'Q':
            res = 12;
            break;
        case 'K':
            res = 13;
            break;
        case 'A':
            res = 14;
            break;
        default:
            res = parseInt(num);
            break;
    }
    return res;
}

function straight(arr) {
    let res = [];
    for (let i = arr.length - 1; i > 0; i--) {
        if (arr[i].num - arr[i - 1].num > 1) {
            res = [];
        }
        if (arr[i].num - arr[i - 1].num == 1) {
            res.push(arr[i]);
        }
        if (res.length === 4) {
            res.push(arr[i - 1]);
            minus(arr, res);
            return res;
        }
    }
    return 0;
}

function double(arr) {
    let res = [];
    for (let i = arr.length - 1; i > 0; i--) {
        if (arr[i].num === arr[i - 1].num) {
            res.push(arr[i], arr[i - 1]);
            i--;
        }
        if (res.length === 4) {
            minus(arr, res);
            res.push(arr[0]);
            arr.shift();
            return res;
        }
    }
    if (res.length === 2) {
        minus(arr, res);
        res.push(arr[0], arr[1], arr[2]);
        arr.splice(0, 3);
        return res;
    }
    return 0;
}

function three(arr) {
    let res = [];
    for (let i = arr.length - 1; i > 1; i--) {
        if (arr[i].num === arr[i - 1].num && arr[i].num === arr[i - 2].num) {
            res.push(arr[i], arr[i - 1], arr[i - 2]);
            minus(arr, res);
            res.push(arr[0], arr[1]);
            minus(arr, [arr[0], arr[1]]);
            return res;
        }
    }
    return 0;
}

function sameFlower(arr) {
    let res = [];
    let flag = ['$', '#', '&', '*']
    for (let f of flag) {
        let i = 0;
        for (let item of arr) {
            {
                if (item.head === f) {
                    res.push(item);
                    i++;
                }
                if (i == 5) {
                    break;
                }
            }
        }
        if (i < 5) {
            res = [];
        } else {
            minus(arr, res);
            return res;
        }
    }
    return 0;
}

function cutSingle(arr) {
    /**若剩下的牌全是单根无法组合，拆分为单根*/
    let res = [];
    if (arr.length === 3) {
        res = arr.slice(0);
        minus(arr, res);
        return res;
    }
    res.push(arr.pop(), arr[0], arr[1], arr[2], arr[3]);
    minus(arr, res)
    return res;
}

function minus(arr1, arr2) {
    for (var i = arr1.length - 1; i >= 0; i--) {
        let a = arr1[i];
        for (var j = arr2.length - 1; j >= 0; j--) {
            let b = arr2[j];
            if (a == b) {
                arr1.splice(i, 1);
                break;
            }
        }
    }
    return arr1;
}

function dealString(arr) {
    let res = [];
    for (let i = 0; i < 3; i++) {
        let array = arr[i];
        let S = "";
        array.forEach(item => {
            S += `${item.head}${item.flag} `;
        })
        S = S.substr(0, S.length - 1);
        res.push(S);
    }
    res.reverse()
    return res;
}
export default {
    dealNum: dealNum,
    straight: straight,
    double: double,
    three: three,
    sameFlower: sameFlower,
    cutSingle: cutSingle,
    dealString: dealString
}