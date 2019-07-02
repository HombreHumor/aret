import { STYLE_ID } from '../constants';
import SelectionService from './SelectionService';

export default class StyleCommandsService {
  afterStyleCommandAction;
  #maxFontSize;
  #minFontSize;

  constructor() {
    this.afterStyleCommandAction = () => {};
  }

  #styleCommand = (styleId, showUI = false, value = null) => {
    let selection = new SelectionService();
    if (selection.isPossibleExecCommand()) {
      selection.init();
      document.execCommand(styleId, showUI, value);
      if (this.afterStyleCommandAction) {
        this.afterStyleCommandAction();
      }
    }
    selection = null;
  };

  #changeFontSize = isAdd => {
    let selection = new SelectionService();
    if (selection.isPossibleExecCommand()) {
      selection.init();
      const spanString = document.createElement('span');
      const selectionText = document.createTextNode(
        selection.getSelectedText()
      );
      spanString.appendChild(selectionText);
      const selectionTextStyles = selection.getStyleOfSelectedTextForChangeFontSize();
      spanString.style.cssText = selectionTextStyles;
      const initialFontSize = selection.getFontSize();
      const increment = isAdd
        ? initialFontSize < this.#maxFontSize
          ? 1
          : 0
        : initialFontSize > this.#minFontSize
          ? -1
          : 0;
      spanString.style.setProperty(
        'font-size',
        `${initialFontSize + increment}px`
      );
      const temp = document.createElement('div');
      temp.appendChild(spanString);
      document.execCommand('insertHTML', false, temp.innerHTML);
      temp.remove();
      if (this.afterStyleCommandAction) {
        this.afterStyleCommandAction();
      }
    }
    selection = null;
  };

  init = ({ afterStyleCommandAction, maxFontSize, minFontSize }) => {
    document.execCommand(STYLE_ID.INIT, false, null);
    if (afterStyleCommandAction) {
      this.afterStyleCommandAction = afterStyleCommandAction;
    }
    this.#maxFontSize = maxFontSize || 30;
    this.#minFontSize = minFontSize || 12;
  };

  toggleBold = () => {
    this.#styleCommand(STYLE_ID.BOLD);
  };

  toggleItalic = () => {
    this.#styleCommand(STYLE_ID.ITALIC);
  };

  toggleUnderline = () => {
    this.#styleCommand(STYLE_ID.UNDERLINE);
  };

  toggleStrikeThrough = () => {
    this.#styleCommand(STYLE_ID.STRIKETHROUGH);
  };

  setTextAlignDirectly = align => {
    if (Object.values(STYLE_ID.TEXT_ALIGN).includes(align)) {
      this.#styleCommand(align);
    }
  };

  setTextAlign = {
    left: () => this.#styleCommand(STYLE_ID.TEXT_ALIGN.LEFT),
    center: () => this.#styleCommand(STYLE_ID.TEXT_ALIGN.CENTER),
    right: () => this.#styleCommand(STYLE_ID.TEXT_ALIGN.RIGHT),
    justify: () => this.#styleCommand(STYLE_ID.TEXT_ALIGN.JUSTIFY),
  };

  toggleFontSize = {
    add: () => this.#changeFontSize(true),
    decide: () => this.#changeFontSize(false),
  };
}
