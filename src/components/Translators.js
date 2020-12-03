import React from "react"
import Locales from "../data/locales.yaml"

const LocaleItem = ({ locale }) => {
  const { label, translators } = locale
  return (
    <div className="translators-locale">
      <h4 className="translators-locale-heading">{label}</h4>
      <div className="translators-locale-translators">
        {translators.map((name, i) => (
          <span key={name}>
            <a
              className="translators-locale-translator"
              key={name}
              href={`https://github.com/${name}`}
            >
              {name}
            </a>
            {i < translators.length - 1 && ", "}
          </span>
        ))}
      </div>
    </div>
  )
}

const Translators = () => {
  return (
    <div className="translators">
      <h3 className="translators-heading">Translation Help</h3>
      <div className="translators-locales">
        {Locales.filter(l => l.translators && l.translators.length > 0).map(
          l => (
            <LocaleItem key={l.id} locale={l} />
          )
        )}
      </div>
    </div>
  )
}

export default Translators
