export const getPostColorFromCategory = (category: string) => {
  switch (category) {
    case "Sustainability":
      return "lime";
    case "Innovation":
      return "cyan";
    case "Security":
      return "violet";
    default:
      return "fuchsia";
  }
};

export const getColorFromPostionType = (position: string) => {
  switch (position) {
    case "Full Time":
      return "lime";
    case "Part Time":
      return "cyan";
    case "Contract":
      return "violet";
    default:
      return "fuchsia";
  }
};

export const getColorFromPostionCategory = (category: string) => {
  switch (category) {
    case "Engineering":
      return "lime";
    case "Product":
      return "cyan";
    case "Marketing":
      return "violet";
    default:
      return "fuchsia";
  }
};
