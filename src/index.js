module.exports = function check(str, bracketsConfig) {
  // your solution
  let stack = [];
    let bracketPair = {};
    let bracketEnd = {};
    for (let i = 0; i < bracketsConfig.length; i++) {
        bracketPair[bracketsConfig[i][0]] = bracketsConfig[i][1];
        bracketEnd[bracketsConfig[i][1]] = true;
    };
    for (let j = 0; j < str.length; j++) {
        let char = str[j];
        if (bracketPair[char] != null && (bracketEnd[char] == null || stack.indexOf(bracketPair[char]) < 0)) {
            stack.push(char);
        } else if (bracketEnd[char] != null) {
            if (bracketPair[stack.pop()] !== char) {
                return false;
            }
        } else {
            return false;
        }
    }
    if (stack.length == 0) {
        return true
    };
    return false;
}
