// Aret is the Awesome Rich Editor of Text

import React, { Component } from "react";
import PropTypes from "prop-types";

import StyleCommandService from "./services/StyleCommandsService";
import StyleStateService from "./services/StyleStateService";
import ContentService from "./services/ContentService";

import EditableArea from "./components/EditableArea";

const propTypes = {
  placeholder: PropTypes.string,
  initialContent: PropTypes.string,
  renderStyleButtons: PropTypes.func,
  renderToolbarWrapper: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  maxFontSize: PropTypes.number,
  minFontSize: PropTypes.number
};

class Aret extends Component {
  constructor(props) {
    super(props);
    this.styleCommand = new StyleCommandService();
    this.styleState = new StyleStateService();
    this.contentService = new ContentService();

    this.state = {
      activeStyles: []
    };
  }

  componentDidMount() {
    this.styleCommand.init({
      afterStyleCommandAction: this.styleState.updateActiveStyles(
        this.updateActiveStyles
      ),
      maxFontSize: this.props.maxFontSize,
      minFontSize: this.props.minFontSize
    });
  }

  updateActiveStyles = activeStyles => {
    this.setState({ activeStyles });
    this.contentService.updateState(this.props.onChange);
  };

  renderToolbar = () => {
    const { renderToolbarWrapper } = this.props;
    if (renderToolbarWrapper) {
      return renderToolbarWrapper({
        activeStyles: this.state.activeStyles,
        styleCommandService: this.styleCommand
      });
    }
    return null;
  };

  render() {
    const { placeholder, initialContent, onBlur, onFocus } = this.props;
    return (
      <div className="aret">
        <EditableArea
          onClick={this.styleState.updateActiveStyles(this.updateActiveStyles)}
          initialContent={initialContent || ""}
          placeholder={placeholder}
          onBlur={onBlur}
          onFocus={onFocus}
        />
        {this.renderToolbar()}
      </div>
    );
  }
}

Aret.propTypes = propTypes;

export default Aret;
