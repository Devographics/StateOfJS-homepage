const colors = {
  greyLight: '#e0e4e4',
  grey: '#d9dedf',
  greyMedium: '#cecdcc',
  greyMediumer: '#616868',
  greyMediumest: '#5c6069',
  greyDark: '#4d4f4f',
  greyDarkish: '#2a2d33',
  greyDarker: '#222429',

  blueLighter: '#B2BBEE',
  blueLight: '#808EE1',
  blue: '#3c52d1',
  blueDark: '#273aa2',

  pinkLightest: '#D3BBF2',
  pinkLighter: '#D68DF0',
  pinkLight: '#EC75CB',
  pink: '#F649A7',
  pinkDark: '#e86ebf',

  greenLighter: '#E7FFED',
  greenLight: '#ACFFC3',
  green: '#85EBA2',
  greenDark: '#59DF7F',

  tealLighter: '#94eeee',
  tealLight: '#65e0e0',
  teal: '#41c7c7',
  tealDark: '#2ba7a7',
  tealDarker: '#1d7e7e',

  purpleLight: '#B096E7',
  purple: '#7854C3',
  purpleDark: '#57457C',

  redLighter: '#f8a8a8',
  redLight: '#fc8f8f',
  red: '#FE6A6A',
  redDark: '#ec5555',
  redDarker: '#be3737',

  yellow: '#fbf34c',
  skyblue: '#1ea0f2',
  orange: '#EF8D33',
  olive: '#599E38',
  aqua: '#3ABBB3',
  indigo: '#4861EC',

  white: '#ffffff',

  navyLightest: '#7e86ad',
  navyLighter: '#484F73',
  navyLight: '#303652',
  navy: '#232840',
  navyDark: '#1a1f35'
}

export default {
    background: colors.greyDarker,
    backgroundAlt: colors.greyDarkish,
    backgroundInverted: colors.greyLight,
    text: colors.greyLight,
    textInverted: colors.greyDarker,
    textHighlight: colors.teal,
    link: colors.teal,
    linkActive: colors.tealLighter,
    linkHover: colors.red,
    active: colors.teal,
    contrast: colors.red,
    border: colors.greyMediumest,
    heatmap: colors.teal,
    lineChartDefaultColor: colors.red,
    barChartDefaultColor: colors.red,
    stroke: colors.greyMediumest,
    ranges: {
        toolExperience: {
            would_use: colors.red,
            would_not_use: colors.redLight,
            interested: colors.teal,
            not_interested: colors.tealLight,
            never_heard: colors.greyMedium
        },
        featureExperience: {
            used_it: colors.teal,
            know_not_used: colors.tealDarker,
            never_heard_not_sure: colors.greyMedium
        },
        featureExperienceSimplified: {
            know_it: colors.tealDarker,
            used_it: colors.teal
        },
        gender: {
            male: colors.blue,
            female: colors.teal,
            non_binary: colors.red,
            prefer_not_to_say: colors.greyMediumer
        }
    },
    distinct: [
        colors.indigo,
        colors.teal,
        colors.pink,
        colors.red,
        colors.green,
        colors.yellow,
        colors.aqua,
        colors.orange,
        colors.olive,
        colors.skyblue,
        colors.purple
    ]
}
