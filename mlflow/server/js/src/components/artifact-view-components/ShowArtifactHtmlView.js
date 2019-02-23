import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getSrc } from './ShowArtifactPage';
import './ShowArtifactHtmlView.css';

class ShowArtifactHtmlView extends Component {
  static propTypes = {
    runUuid: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className="ShowArtifactPage">
        <iframe id="ShowArtifactHtmlView"
                title="Artifact View"
                src={getSrc(this.props.path, this.props.runUuid)}
                sandbox="allow-top-navigation"
        />
      </div>
    );
  }
}

export default ShowArtifactHtmlView;
