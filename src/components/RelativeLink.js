import PropTypes from 'prop-types';
import React from 'react';
import {Link as GatsbyLink} from 'gatsby';
import {Link} from '@chakra-ui/react';
import {isUrl} from '../utils';

export function ColorLink(props) {
  return <Link color="primary" {...props} />;
}

export default function RelativeLink({href, ...props}) {
  if (!href) {
    return <a {...props} />;
  }

  const isExternal = isUrl(href);
  const linkProps =
    isExternal || href.startsWith('#')
      ? {href, isExternal}
      : {as: GatsbyLink, to: href};

  return <ColorLink {...linkProps} {...props} />;
}

RelativeLink.propTypes = {
  href: PropTypes.string.isRequired
};
