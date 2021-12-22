
export function plus(...theArgs) {
    return theArgs.reduce((previous, current) => {
      return previous + current;
    });
  }