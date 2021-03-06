/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const mappings = new Map()
    mappings.set("(", ")")
    mappings.set("[", "]")
    mappings.set("{", "}")

    const stack = []
    for (let i = 0; i < s.length; i++) {
        if (mappings.has(s[i])) {
            stack.push(mappings.get(s[i]))
        } else {
            if (stack.pop() !== s[i]) {
                return false
            }
        }
    }

    return stack.length === 0
};