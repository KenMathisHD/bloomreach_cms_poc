export const stripHtml = (string) => {
  return string.replace(/<[^>]*>|&\w+;/g, "");
};
