import { STYLE_ID, CSS_STYLES } from "../constants";

export const getWordAtCaretPosition = (text, caretPos) => {
  const preText = text.substring(0, caretPos);
  const postText = text.substring(caretPos, text.length);
  const currentWordArray = [];
  if (preText.indexOf(" ") > 0) {
    const words = preText.split(" ");
    currentWordArray.push(words[words.length - 1]);
  } else {
    currentWordArray.push(preText);
  }
  if (postText.indexOf(" ") > 0) {
    const words = postText.split(" ");
    currentWordArray.push(words[0]);
  } else {
    currentWordArray.push(postText);
  }
  return currentWordArray.join("");
};

export const findAllIncoming = (substring, string) => {
  var a = [],
    i = -1;
  while ((i = string.indexOf(substring, i + 1)) >= 0) a.push(i);
  return a;
};

export const findNearestNumber = (counts, goal) => {
  return counts.reduce(function(prev, curr) {
    return Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev;
  });
};

export const getWordPositionInText = (text, word, caretPos) => {
  const allIncoming = findAllIncoming(word, text);
  const start = findNearestNumber(allIncoming, caretPos);
  const end = start + word.length;
  return {
    start,
    end
  };
};

export const buildStyleArray = node => {
  if (node.style.cssText) {
    const nodeStyles = node.style.cssText.split(";");
    const styleArr = [];
    nodeStyles.forEach(style => {
      if (style) {
        const styleProperty = style.split(": ")[1];
        Object.values(CSS_STYLES).forEach((cssStyle, index) => {
          if (styleProperty.includes(cssStyle)) {
            styleArr.push(STYLE_ID[Object.keys(CSS_STYLES)[index]]);
          }
        });
        Object.values(CSS_STYLES.TEXT_ALIGN).forEach((cssStyle, index) => {
          if (styleProperty.includes(cssStyle)) {
            styleArr.push(
              STYLE_ID.TEXT_ALIGN[Object.keys(CSS_STYLES.TEXT_ALIGN)[index]]
            );
          }
        });
      }
    });
    return styleArr;
  }
  return [];
};

export const getTextNodeStyles = node => {
  const parentStyles = buildStyleArray(node.parentElement);
  const grandParentStyles = buildStyleArray(node.parentElement.parentElement);
  const styles = [...parentStyles, ...grandParentStyles];
  return styles;
};
