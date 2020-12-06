import './analytics.css'
import Statistics from '../scripts/components/Statistics'

const data = localStorage.getItem('data')

const statistics = new Statistics(JSON.parse(data))

statistics.init()
