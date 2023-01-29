// import Raven from 'raven-js'

function init() {
  // Raven.config("https://16fae08c07904100968bb7ce0e831d69@o4504538621018112.ingest.sentry.io/4504538625802240", {
  //   release: '1-0-0',
  //   environment: 'development-test'
  // }).install()
}



function log(error) {
  console.log(error);
  // Raven.captureException(error)
}

const resObj = {
  init,
  log,
}

export default resObj