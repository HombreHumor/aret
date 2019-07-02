import {
  getWordAtCaretPosition,
  getWordPositionInText,
  getTextNodeStyles,
} from '../utils/selection';

export default class SelectionService {
  #selection;
  #focusNode;
  #focusOffset;
  #textContent;
  #range;
  #selectedWord;
  #selectedWordPosition;
  #fontSize;

  constructor() {
    this.#selection = document.getSelection();
    this.#focusNode = this.#selection.focusNode;
    this.#focusOffset = this.#selection.focusOffset;
    this.#textContent = this.#focusNode ? this.#focusNode.textContent : '';
    this.#range = document.createRange();
    this.#selectedWord = '';
    this.#selectedWordPosition = { start: 0, end: 0 };
    this.#fontSize = 16;
  }

  #setSelectedWord = () => {
    this.#selectedWord = getWordAtCaretPosition(
      this.#textContent,
      this.#focusOffset
    );
  };

  #setSelectedWordPosition = () => {
    this.#selectedWordPosition = getWordPositionInText(
      this.#textContent,
      this.#selectedWord,
      this.#focusOffset
    );
  };

  #setCurrentRange = () => {
    this.#range.setStart(this.#focusNode, this.#selectedWordPosition.start);
    this.#range.setEnd(this.#focusNode, this.#selectedWordPosition.end);
  };

  #addRangeToSelection = () => {
    this.#selection.removeAllRanges();
    this.#selection.addRange(this.#range);
  };

  #checkIsAlreadySelect = () => {
    return !!this.#selection.toString();
  };

  #setFontSizeOfSelection = () => {
    const inlineFontSize = this.#focusNode.parentElement.style.fontSize;
    if (inlineFontSize) {
      this.#fontSize = parseInt(inlineFontSize);
    }
  };

  getFontSize = () => {
    return this.#fontSize;
  };

  getSelectedText = () => {
    return this.#selection.toString() || this.#selectedWord;
  };

  getStyleOfSelectedTextForChangeFontSize = () => {
    const parentStyles = this.#focusNode.parentElement.style.cssText;
    const grandparentStyles = this.#focusNode.parentElement.parentElement.style
      .cssText;
    return `${parentStyles} ${grandparentStyles}`;
  };

  isPossibleExecCommand = () => {
    return (
      !!this.#focusNode &&
      (!!this.#selection.toString() || !!this.#focusNode.textContent)
    );
  };

  init = () => {
    if (!this.#checkIsAlreadySelect()) {
      this.#setSelectedWord();
      this.#setSelectedWordPosition();
      this.#setCurrentRange();
      this.#setFontSizeOfSelection();
      this.#addRangeToSelection();
    }
  };

  getSelectionStyle = () => {
    return getTextNodeStyles(this.#focusNode);
  };
}
