import 'babel-polyfill'
import ReactDOMServer from 'react-dom/server'
import ProductsList from 'components/ProductsList'
import HomeSlider from 'components/HomeSlider'
import App from '../ServerApp'
import HeaderProvider from 'containers/HeaderProvider'
import Footer from 'components/Footer'

require('es6-promise').polyfill()

global.ReactDOMServer = ReactDOMServer
global.App = App
global.ProductsList = ProductsList
global.HomeSlider = HomeSlider
global.HeaderProvider = HeaderProvider
global.Footer = Footer
