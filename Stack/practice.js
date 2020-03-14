const Stack = require("./stackArray");

// 括号匹配 2.3+23/12+（3.14159×0.24 => false
function exercises001(string) {
    const stack = new Stack();
    // let macthStrArr = ['(', ')'];
    // let matchStrMap = new Map([macthStrArr]);
    let strArray = string.split("");
    let isMatch = true;
    for (let index = 0; index < strArray.length; index++) {
        const element = strArray[index];
        if (element === '(') {
            stack.push(element);
        } else if (element === ')') {
            if (stack.isEmpty()) {
                isMatch = false;
            } else {
                if (stack.peek() === '(') {
                    stack.pop();
                }
            }
        }
    }
    if (!stack.isEmpty()) {
        isMatch = false;
    }
    console.warn(isMatch);
    return isMatch;
}

exercises001('(()))');
