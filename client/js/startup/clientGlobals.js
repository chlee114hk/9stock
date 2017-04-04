import ProductsList from 'components/ProductsList'
import HomeSlider from 'components/HomeSlider'
import HeaderProvider from 'containers/HeaderProvider'
import Footer from 'components/Footer'
import App from '../ClientApp'

window.App = App

window.ProductsList = ProductsList
window.HeaderProvider = HeaderProvider
window.HeaderProvider = HomeSlider
window.Footer = Footer

if (process.env.NODE_ENV === 'development') {
  window.DevToolsProvider = require('containers/DevToolsProvider').default
}
