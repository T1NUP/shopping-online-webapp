import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
  GooglePlusIcon,
  LinkedinIcon
} from "react-share";
class SocialFooterComponent extends Component {
  render() {
    const shareUrl = window.location;
    return (
      <div className="Demo__some-network">
        <ul className="social-icons">
          <li>
            <Link className="rss" data-original-title="rss" to="/" />
          </li>
          <li>
            <Link className="facebook" data-original-title="facebook" to="/">
              <FacebookShareButton
                url={shareUrl}
                className="Demo__some-network__share-button"
              >
                <FacebookIcon size={29} round />
              </FacebookShareButton>
            </Link>
          </li>
          <li>
            <Link className="twitter" data-original-title="twitter" to="/">
              <TwitterShareButton
                url={shareUrl}
                className="Demo__some-network__share-button"
              >
                <TwitterIcon size={29} round />
              </TwitterShareButton>
            </Link>
          </li>
          <li>
            <Link
              className="googleplus"
              data-original-title="googleplus"
              to="/"
            >
              <GooglePlusShareButton
                url={shareUrl}
                className="Demo__some-network__share-button"
              >
                <GooglePlusIcon size={29} round />
              </GooglePlusShareButton>
            </Link>
          </li>
          <li>
            <Link className="linkedin" data-original-title="linkedin" to="/">
              <LinkedinShareButton
                url={shareUrl}
                className="Demo__some-network__share-button"
              >
                <LinkedinIcon size={29} round />
              </LinkedinShareButton>
            </Link>
          </li>
          <li>
            <Link className="youtube" data-original-title="youtube" to="/"></Link>
          </li>
          <li>
            <Link className="vimeo" data-original-title="vimeo" to="/" />
          </li>
          <li>
            <Link className="skype" data-original-title="skype" to="/" />
          </li>
        </ul>
      </div>
    );
  }
}

export default SocialFooterComponent;
