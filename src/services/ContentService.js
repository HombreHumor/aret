export default class ContentService {
  #content;
  #textContent;

  constructor() {
    this.#content = '';
    this.#textContent = '';
  }

  #getCurrentContent = () => {
    const aret = document.querySelector('.aret');
    const editor = aret.querySelector('.textarea');
    this.#content = editor.innerHTML;
    this.#textContent = editor.textContent;
  };

  checkIsTextContent = () => {
    this.#getCurrentContent();
    return this.#textContent === ' ' ? false : !!this.#textContent;
  };

  updateState = stateUpdater => {
    this.#getCurrentContent();
    stateUpdater
      ? stateUpdater(this.checkIsTextContent() ? this.#content : ' ')
      : null;
  };
}
