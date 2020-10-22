
const mixins = {
  rowColours: (index: number) => index % 2 === 0 ? 'bg-gray-100' : 'bg-white',
  funColours: {
    boring: "green-200",
    safe: "green-400",
    awesome: "green-600",
    tricky: "red-300",
    danger: "red-600",
  },
  windFunColour: (direction: number) => {
    if (direction > 238  || direction < 58) {
      return mixins.funColours.awesome;
    } else if (direction > 233 || direction < 63) {
      return mixins.funColours.tricky;
    }
  
    return mixins.funColours.danger;
  },
}

export default mixins;
