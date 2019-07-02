import React, { Component } from 'react';
import PropTypes from 'prop-types';

import StyleCommandService from '../../services/StyleCommandsService';
import { STYLE_ID } from '../../constants';

const propTypes = {
  type: PropTypes.string.isRequired,
  activeStyles: PropTypes.arrayOf(PropTypes.string).isRequired,
  styleCommandService: PropTypes.instanceOf(StyleCommandService),
  renderButtonContent: PropTypes.func.isRequired,
};

class StyleButton extends Component {
  isActive = () => {
    const { type, activeStyles } = this.props;
    return !!activeStyles.length && activeStyles.includes(type);
  };

  onClick = () => {
    const { type, styleCommandService } = this.props;
    switch (type) {
    case STYLE_ID.BOLD:
      styleCommandService.toggleBold();
      break;
    case STYLE_ID.ITALIC:
      styleCommandService.toggleItalic();
      break;
    case STYLE_ID.UNDERLINE:
      styleCommandService.toggleUnderline();
      break;
    case STYLE_ID.STRIKETHROUGH:
      styleCommandService.toggleStrikeThrough();
      break;
    case STYLE_ID.TEXT_ALIGN.LEFT:
      styleCommandService.setTextAlign.left();
      break;
    case STYLE_ID.TEXT_ALIGN.CENTER:
      styleCommandService.setTextAlign.center();
      break;
    case STYLE_ID.TEXT_ALIGN.RIGHT:
      styleCommandService.setTextAlign.right();
      break;
    case STYLE_ID.TEXT_ALIGN.JUSTIFY:
      styleCommandService.setTextAlign.justify();
      break;
    case STYLE_ID.FONT_SIZE_ADD:
      styleCommandService.toggleFontSize.add();
      break;
    case STYLE_ID.FONT_SIZE_DECIDE:
      styleCommandService.toggleFontSize.decide();
      break;
    default:
      return null;
    }
  };

  render() {
    const { renderButtonContent } = this.props;
    return (
      <button className="button" onClick={this.onClick}>
        {renderButtonContent({ isActive: this.isActive() })}
      </button>
    );
  }
}

StyleButton.propTypes = propTypes;

export default StyleButton;
