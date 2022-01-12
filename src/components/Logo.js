import React from "react"
import colors from "../colors.js"

const color = c => colors[c]

const LogoImage = () => (
  <div className="logo-image">
    <img src="/images/stateofjs2021.png" alt="State Of JavaScript 2021-2022" />
  </div>
)

const LogoMain = () => (
  <div aria-hidden="true" className={`Logo__Container`}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="344"
      height="334"
      fill="none"
      viewBox="0 0 344 334"
      alt="State of JavaScript 2020 Logo"
    >
      <path
        stroke={color("stroke")}
        strokeWidth="1.614"
        d="M172 246.096H251.09699999999998V325.193H172z"
      ></path>
      <path
        fill={color("contrast")}
        d="M209.85 293.078h-10.14l4.416-3.574c2.935-2.353 5.172-4.533 5.172-7.845 0-3.487-2.469-6.015-6.799-6.015-4.213 0-6.421 2.383-7.293 5.056l3.313 1.25c.494-1.686 1.54-3.022 3.661-3.022 1.917 0 3.08 1.046 3.08 2.963v.291c0 1.714-1.046 3.138-3.197 4.998l-6.508 5.549v3.545h14.295v-3.196zm10.159 3.545c5.288 0 7.67-3.865 7.67-10.489 0-6.625-2.382-10.49-7.67-10.49-5.289 0-7.671 3.865-7.671 10.49 0 6.624 2.382 10.489 7.671 10.489zm0-3.051c-2.79 0-3.807-2.15-3.807-5.637v-3.603c0-3.487 1.017-5.637 3.807-5.637 2.789 0 3.806 2.15 3.806 5.637v3.603c0 3.487-1.017 5.637-3.806 5.637zm0-5.724c1.336 0 1.801-.61 1.801-1.395v-.639c0-.785-.465-1.395-1.801-1.395-1.337 0-1.802.61-1.802 1.395v.639c0 .785.465 1.395 1.802 1.395z"
      ></path>
      <path
        fill={color("text")}
        d="M180.295 254.77v5.433h1.816c.233-.436.712-1.046 1.787-1.046 1.279 0 2.136.872 2.136 2.339 0 1.569-.886 2.557-2.426 2.557-1.555 0-2.514-.915-2.514-2.484v-.218h-1.176v.261c0 2.15 1.496 3.53 3.69 3.53 2.193 0 3.632-1.554 3.632-3.646 0-2.063-1.351-3.4-3.109-3.4-1.438 0-2.107.654-2.485 1.351h-.174v-3.588h5.492v-1.089h-6.669z"
      ></path>
      <path
        stroke={color("stroke")}
        strokeWidth="1.614"
        d="M251.096 167H330.193V246.09699999999998H251.096z"
      ></path>
      <path
        fill={color("contrast")}
        d="M288.85 214.078h-10.14l4.416-3.574c2.935-2.353 5.172-4.533 5.172-7.845 0-3.487-2.469-6.015-6.799-6.015-4.213 0-6.421 2.383-7.293 5.056l3.313 1.25c.494-1.686 1.54-3.022 3.661-3.022 1.917 0 3.08 1.046 3.08 2.963v.291c0 1.714-1.046 3.138-3.197 4.998l-6.508 5.549v3.545h14.295v-3.196zm10.159 3.545c5.288 0 7.67-3.865 7.67-10.489 0-6.625-2.382-10.49-7.67-10.49-5.289 0-7.671 3.865-7.671 10.49 0 6.624 2.382 10.489 7.671 10.489zm0-3.051c-2.79 0-3.807-2.15-3.807-5.637v-3.603c0-3.487 1.017-5.637 3.807-5.637 2.789 0 3.806 2.15 3.806 5.637v3.603c0 3.487-1.017 5.637-3.806 5.637zm0-5.724c1.336 0 1.801-.61 1.801-1.395v-.639c0-.785-.465-1.395-1.801-1.395-1.337 0-1.802.61-1.802 1.395v.639c0 .785.465 1.395 1.802 1.395z"
      ></path>
      <path
        fill={color("text")}
        d="M266.322 182.53c0-2.092-1.497-3.472-3.255-3.472-1.481 0-2.193.726-2.557 1.337h-.174v-1.453c0-1.438.915-2.383 2.455-2.383 1.511 0 2.223.814 2.223 2.049h1.191c0-1.831-1.278-3.138-3.414-3.138-2.179 0-3.646 1.438-3.646 3.53v3.545c0 2.106 1.554 3.501 3.574 3.501 2.048 0 3.603-1.424 3.603-3.516zm-3.603-2.44c1.438 0 2.411.987 2.411 2.44 0 1.453-.973 2.426-2.411 2.426-1.409 0-2.383-.973-2.383-2.426 0-1.453.974-2.44 2.383-2.44z"
      ></path>
      <path
        stroke={color("stroke")}
        strokeWidth="1.614"
        d="M172 8.807H251.09699999999998V87.904H172z"
      ></path>
      <path
        fill={color("text")}
        d="M210.955 58.985l-5.724-20.281h-5.289l-5.695 20.28h3.836l1.394-5.142h6.015l1.424 5.143h4.039zm-6.102-8.252h-4.707l2.237-8.281h.233l2.237 8.28zm21.809 8.252V56.05h-6.101v-9.123h6.101v-2.935h-6.101v-5.288h-3.458v3.632c0 1.25-.465 1.656-1.656 1.656h-2.964v2.935h4.359v7.99c0 2.383 1.336 4.068 4.184 4.068h5.636zM179.976 20.735v.377h1.191v-.305c0-1.569.944-2.44 2.484-2.44 1.308 0 2.267.784 2.267 2.135 0 1.467-1.046 2.107-2.775 2.615-1.932.567-3.182 1.337-3.182 3.356v1.177h7.09v-1.09h-5.884v-.232c0-1.395.872-1.758 2.499-2.252 1.99-.61 3.443-1.482 3.443-3.53 0-1.962-1.438-3.27-3.458-3.27-2.15 0-3.675 1.323-3.675 3.459z"
      ></path>
      <path
        stroke={color("stroke")}
        strokeWidth="1.614"
        d="M251.096 87.903H330.193V167H251.096z"
      ></path>
      <path
        fill={color("text")}
        d="M296.402 138.081v-3.138h-9.007v-5.579h8.688v-3.138h-8.688v-5.288h9.007V117.8h-12.813v20.281h12.813zM259.188 96.577v1.104h5.274l-3.167 2.789v1.119h1.453c1.235 0 2.252.726 2.252 2.063 0 1.264-.93 2.208-2.368 2.208-1.555 0-2.543-.857-2.543-2.383v-.581h-1.191v.625c0 2.107 1.54 3.429 3.748 3.429 1.976 0 3.545-1.337 3.545-3.269 0-1.874-1.322-3.037-3.007-3.037h-.364v-.159l3.269-2.848v-1.06h-6.901z"
      ></path>
      <path
        stroke={color("stroke")}
        strokeWidth="1.614"
        d="M92.903 8.807H172V87.904H92.903z"
      ></path>
      <path
        fill={color("text")}
        d="M123.258 59.333c4.91 0 7.554-2.644 7.554-6.42 0-3.023-1.714-5.028-5.201-5.667l-2.121-.378c-2.237-.377-3.08-1.133-3.08-2.673 0-1.801 1.133-2.73 3.312-2.73 2.034 0 3.545.813 4.62 2.091l2.238-2.383c-1.395-1.743-3.719-2.818-6.887-2.818-4.416 0-7.118 2.15-7.118 6.015 0 2.818 1.453 5.085 5.201 5.724l2.15.348c2.208.349 3.051 1.133 3.051 2.732 0 1.946-1.279 3.05-3.603 3.05-2.005 0-3.777-.813-5.288-2.556l-2.296 2.382c1.54 1.976 4.01 3.283 7.468 3.283zm24.308-.348V56.05h-6.102v-9.123h6.102v-2.935h-6.102v-5.288h-3.457v3.632c0 1.25-.465 1.656-1.657 1.656h-2.963v2.935h4.358v7.99c0 2.383 1.337 4.068 4.184 4.068h5.637zM103.16 17.48l-2.905 4.388h1.351l2.063-3.226h.174v9.008h1.191l.015-10.17h-1.889z"
      ></path>
      <path
        stroke={color("stroke")}
        strokeWidth="1.614"
        d="M92.807 246V87.807H251V246H92.807z"
      ></path>
      <path
        fill={color("text")}
        d="M132.501 216.607l12.23-7.401c2.359 4.183 4.506 7.723 9.654 7.723 4.934 0 8.046-1.931 8.046-9.439v-51.062h15.017v51.274c0 15.555-9.117 22.635-22.42 22.635-12.013 0-18.987-6.222-22.527-13.731M185.606 214.998l12.228-7.08c3.219 5.257 7.402 9.119 14.804 9.119 6.222 0 10.19-3.111 10.19-7.403 0-5.149-4.076-6.972-10.941-9.975l-3.754-1.61c-10.835-4.612-18.023-10.405-18.023-22.634 0-11.263 8.582-19.846 21.992-19.846 9.547 0 16.412 3.326 21.346 12.015l-11.693 7.509c-2.574-4.612-5.363-6.436-9.653-6.436-4.399 0-7.188 2.789-7.188 6.436 0 4.506 2.789 6.33 9.225 9.119l3.754 1.609c12.766 5.471 19.953 11.049 19.953 23.599 0 13.517-10.62 20.918-24.886 20.918-13.946 0-22.957-6.65-27.354-15.34z"
      ></path>
      <path
        stroke={color("stroke")}
        strokeWidth="1.614"
        d="M13.807 87.903H92.904V167H13.807z"
      ></path>
      <path
        fill={color("active")}
        d="M44.394 138.43c5.288 0 7.67-3.865 7.67-10.489 0-6.625-2.382-10.489-7.67-10.489-5.289 0-7.671 3.864-7.671 10.489 0 6.624 2.382 10.489 7.67 10.489zm0-3.109c-2.703 0-3.632-2.15-3.632-5.637v-3.487c0-3.486.93-5.636 3.632-5.636s3.632 2.15 3.632 5.636v3.458c0 3.516-.93 5.666-3.632 5.666zm10.884 2.76H68.47v-2.934h-4.88v-9.124h5.549v-2.935h-5.55v-3.573h5.55v-2.935h-5.056c-2.876 0-4.213 1.685-4.213 4.068v2.44h-4.881v2.935h4.881v9.124h-4.59v2.934z"
      ></path>
      <path
        fill={color("text")}
        d="M25.807 96.577l-4.416 7.104v1.046h5.259v2.019h1.191v-2.019h1.743v-1.09h-1.743v-7.06h-2.034zm.668.987h.175v6.073h-3.937l3.762-6.073z"
      ></path>
    </svg>
  </div>
)

export default LogoImage
