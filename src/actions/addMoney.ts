export const addMoneyAction = (amount: number) => {
  context.executeAction("cheatset", { type: 16, param1: amount, param2: 0 });
};
