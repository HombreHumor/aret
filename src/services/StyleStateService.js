import SelectionService from './SelectionService';

export default class StyleStateService {
  #activeStyles;

  constructor() {
    this.#activeStyles = [];
  }

  #setActiveStyles = () => {
    let selection = new SelectionService();
    this.#activeStyles = selection.getSelectionStyle();
    selection = null;
  };

  updateActiveStyles = stateUpdater => () => {
    this.#setActiveStyles();
    stateUpdater && stateUpdater(this.#activeStyles);
  };
}
