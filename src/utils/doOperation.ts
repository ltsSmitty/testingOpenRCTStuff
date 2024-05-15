export type Operation = "add" | "subtract" | "divide" | "multiply";

export const doOperation = (operation: Operation, a: number, b: number) => {
  switch (operation) {
    case "add": {
      return a + b;
    }
    case "subtract": {
      return a - b;
    }
    case "divide": {
      return a / b;
    }
    case "multiply": {
      return a * b;
    }
  }
};

export const getUndoOperationValues = (
  value: number,
  operation: Operation
): { undoValue: number; undoOperation: Operation } => {
  switch (operation) {
    case "add": {
      return { undoValue: -value, undoOperation: "add" };
    }
    case "subtract": {
      return { undoValue: -value, undoOperation: "subtract" };
    }
    case "divide": {
      return { undoValue: value, undoOperation: "multiply" };
    }
    case "multiply": {
      return { undoValue: value, undoOperation: "divide" };
    }
  }
};
