import React from 'react';
import  Locales from '../data/locales.yaml';

const Languages = () => {
  return (
    <div className="languages layout-narrow">
      <p className="languages-languages">
        Available Languages:{' '}
        {Locales.map(({ label, id }, i) => (
          <span key={id} className="locale-selector-item">
            
              {label}
            {i < Locales.length - 1 ? <span>, </span> : <span>. </span>}
          </span>
        ))}
      </p>
      <a
        className="languages-help"
        href="https://github.com/StateOfJS/state-of-js-graphql-results-api/issues/50"
      >
        Help us translate the survey in your language.
      </a>
    </div>
  );
};

export default Languages;
