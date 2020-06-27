# 练习

### 001．栈可以用来判断一个算术表达式中的括号是否匹配。编写一个函数，该函数接受一个算术表达式作为参数，返回括号缺失的位置。下面是一个括号不匹配的算术表达式的例子：2.3+23/12+（3.14159×0.24。

```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
const exercises001 = function (s) {
  const stack = new Stack();
  const match = {
    ')': '(',
    ']': '[',
    '}': '{',
  };
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
  return stack.size() === 0;
};
```

### 002．一个算术表达式的后缀表达式形式如下：op1 op2 operator 使用两个栈，一个用来存储操作数，另外一个用来存储操作符，设计并实现一个 JavaScript 函数，该函数可以将中缀表达式转换为后缀表达式，然后利用栈对该表达式求值。

### 003．现实生活中栈的一个例子是佩兹糖果盒。想象一下你有一盒佩兹糖果，里面塞满了红色、黄色和白色的糖果，但是你不喜欢黄色的糖果。使用栈（有可能用到多个栈）写一段程序，在不改变盒内其他糖果叠放顺序的基础上，将黄色糖果移出。
