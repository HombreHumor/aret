import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ContentService from '../../services/ContentService';

const propTypes = {
  placeholder: PropTypes.string,
  initialContent: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
};

class EditableArea extends Component {
  constructor(props) {
    super(props);
    this.contentService = new ContentService();
    this.state = {
      initialContent: '',
      isPlaceholder: false,
    };
  }

  checkForPlaceholder = () => {
    if (this.contentService.checkIsTextContent()) {
      this.setState({ isPlaceholder: false });
    } else {
      this.setState({ isPlaceholder: true });
    }
  };

  componentDidMount() {
    this.setState(
      { initialContent: this.props.initialContent },
      this.checkForPlaceholder
    );
  }

  onKeyUp = () => {
    this.props.onClick();
    this.checkForPlaceholder();
  };

  onClickPlaceholder = () => {
    this.textarea.focus();
  };

  render() {
    const { placeholder, onClick, onBlur, onFocus } = this.props;
    return (
      <React.Fragment>
        <div
          ref={c => (this.textarea = c)}
          className="textarea"
          contentEditable
          onKeyUp={this.onKeyUp}
          onClick={onClick}
          onBlur={onBlur}
          onFocus={onFocus}
          dangerouslySetInnerHTML={{
            __html: this.state.initialContent,
          }}
        />
        {this.state.isPlaceholder && !!placeholder && (
          <div className="placeholder" onClick={this.onClickPlaceholder}>
            {placeholder}
          </div>
        )}
      </React.Fragment>
    );
  }
}

EditableArea.propTypes = propTypes;

export default EditableArea;
