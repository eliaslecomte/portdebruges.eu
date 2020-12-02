export const formatTime = (datetime: Date) => {
  return `${datetime.getHours().toLocaleString(undefined, {
    minimumIntegerDigits: 2
  })}:${datetime.getMinutes().toLocaleString(undefined, { minimumIntegerDigits: 2 })}`;
};
