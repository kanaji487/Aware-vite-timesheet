import Navbar from "./components/Navbar"
import Functionbar from "./components/Functionbar"
import DayChecked from "./components/DayChecked"

const WeekviewTimesheet = () => {
  return (
    <div className="h-screen bg-no-repeat bg-cover">
        <Navbar />
        <Functionbar />
        <DayChecked />
    </div>
  )
}

export default WeekviewTimesheet
