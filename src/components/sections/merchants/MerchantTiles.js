import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../../utils/SectionProps';
import SectionHeader from '../partials/SectionHeader';

import TileSection from './TileSection';

const propTypes = {
  ...SectionProps.types
};

const defaultProps = {
  ...SectionProps.defaults
};

const MerchantTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const {
    tileonehead,
    tiletwohead,
    tilethreehead,
    tilethreetext,
    tiletwotext,
    tileonetext,
    title,
    paragraph
  } = props;

  const sectionHeader = {
    title: title,
    paragraph: paragraph
  };

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section {...props} className={outerClasses}>
      <div className='container-sm'>
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className='center-content' />
        </div>
      </div>
      <TileSection
        tileonehead={tileonehead}
        tiletwohead={tiletwohead}
        tilethreehead={tilethreehead}
        tilethreetext={tilethreetext}
        tiletwotext={tiletwotext}
        tileonetext={tileonetext}
      />
    </section>
  );
};

MerchantTiles.propTypes = propTypes;
MerchantTiles.defaultProps = defaultProps;

export default MerchantTiles;
