// Solve all the typing issues in the code without changing the implementation

const sendMessage = (message: { to: string; text?: string }) => {
  if (message.text !== undefined) {
    return message.text.toUpperCase();
  } else {
    return "text doesn't provided";
  }
};

console.log(sendMessage({ to: "Alice" }));
