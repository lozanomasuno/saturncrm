import { NavBar } from '../components/Navbar';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import  enUS from 'date-fns/locale/en-US'
import { addHours, parse, startOfWeek, getDay, format } from 'date-fns';

const locales = {
  'en-US': enUS,
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

const events = [
  {
    title: 'Cumpleaños del Jefe',
    notes: 'Hay que comprar el pastel',
    start: new Date(),
    end: addHours ( new Date(), 2),
    bgColor: '#fafafa',
    user : {
      _id: '123',
      name: 'Nelson'
    }
    
  }
]
export const CalendarPage = () => {
  return (
    <>
     <NavBar />

     <Calendar
      localizer ={ localizer }
      events ={ events }
      startAccessor ="start"
      endAccessor ="end"
      style={{ height: 'calc(100vh - 80px)' }}
    />
    </>
  )
}
