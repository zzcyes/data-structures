const Stack = require("./stack-array");

const { log } = require("../utils");
/**
 * @param {string} s
 * @return {boolean}
 */
const exercises001 = function (s) {
    const stack = new Stack();
    const match = {
        ')': '(',
        ']': '[',
        '}': '{'
    }
    for (let i = 0; i < s.length; i++) {
        let el = s.charAt(i);
        if (el in match) {
            let temp = stack.size() != 0 ? stack.pop() : '!';
            if (temp !== match[el]) {
                return false;
            }
        } else {
            stack.push(el);
        }
    }
    return stack.size() == 0;
};

// 测试用例
const example_001 = {
    "()": {
        expect: true,
    },
    "()[]{}": {
        expect: true,
    },
    "(]": {
        expect: false,
    },
    "([)]": {
        expect: false,
    },
    "{[]}": {
        expect: true,
    }
}

// 测试代码
Object.keys(example_001).forEach(key => {
    example_001[key].actual = exercises001(key);
    if (example_001[key].actual !== example_001[key].expect) {
        example_001[key].result = '失败！'
    } else {
        example_001[key].result = '通过！'
    }
});

// 打印日志
log('example_001', example_001);


// 123+123
// + - *  / %
// op1 op2 operator
/**
 * @param {string} s
 * @return {boolean}
 */
const exercises002 = function (s) {
    const match = ['+', '-', '*', '/', '%'];
    // TODO
    return match;
};
// 测试用例
const example_002 = {
    "123+456": {
        expect: "123 456 +",
    },
    "2%10": {
        expect: "2 10 %",
    },
    "224-8": {
        expect: "224 8 -",
    },
    "2*24": {
        expect: "2 24 *",
    },
    "98-4": {
        expect: "98 4 -",
    },
}

// 测试代码
Object.keys(example_002).forEach(key => {
    example_002[key].actual = exercises002(key);
    if (example_002[key].actual !== example_002[key].expect) {
        example_002[key].result = '失败！'
    } else {
        example_002[key].result = '通过！'
    }
});

// 打印日志
log('example_002', example_002);

