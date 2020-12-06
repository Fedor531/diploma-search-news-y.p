import './analytics.css'
import Statistics from '../scripts/components/Statistics'
import DataStorage from '../scripts/modules/DataStorage'

const dataStorage = new DataStorage()

const data = dataStorage.getData('data')

const statistics = new Statistics(data)

statistics.init()
