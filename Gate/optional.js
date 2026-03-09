// Solve all the typing issues in the code without changing the implementation
var sendMessage = function (message) {
    if (message.text !== undefined) {
        return message.text.toUpperCase();
    }
    //  else {
    //     return "text doesn't provided";
    //   }
};
console.log(sendMessage({ to: "Alice" }));
