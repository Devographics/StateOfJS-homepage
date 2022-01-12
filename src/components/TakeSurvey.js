import React, { useState, useEffect } from "react"
import qs from "qs"

const surveyUrl = "https://app.stateofjs.com/survey/state-of-js/2021"

export default () => {
  let suffix = ""
  const [source, setSource] = useState()
  const [email, setEmail] = useState()
  const [referrer, setReferrer] = useState()

  useEffect(() => {
    const q = qs.parse(window.location.href.split("?")[1])
    setSource(q.source)
    setEmail(q.email)
    if (document.referrer) {
      setReferrer(document.referrer)
    }
  })

  if (source || referrer || email) {
    suffix = "?"
    if (source) {
      suffix += `source=${source}&`
    }
    if (referrer) {
      suffix += `referrer=${referrer}&`
    }
    if (email) {
      suffix += `email=${email}&`
    }
  }

  return (
    <div className="TakeSurvey">
      {/* <span className="button large-button button-disabled">
      Take Survey (Coming Soon!)
    </span> */}
      <a className="button large-button" href={surveyUrl + suffix}>
        Take Survey
      </a>
    </div>
  )
}
