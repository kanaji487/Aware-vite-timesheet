import { Link } from "react-router-dom"
import { useState } from "react";

const Functionbar = (openModal) => {

  const [date, setDate] = useState(new Date());
  const [isButton1Pressed, setButton1Pressed] = useState(false);
  const [isButton2Pressed, setButton2Pressed] = useState(false);

  const formattedDate = date.toLocaleDateString('en-US', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  const incrementDate = () => {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate()+1);
    setDate(newDate);
  };

  const decrementDate = () => {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate()-1);
    setDate(newDate);
  };

  const handleButton1Press = () => {
    setButton1Pressed(true);
    setButton2Pressed(false);
  };

  const handleButton2Press = () => {
    setButton1Pressed(false);
    setButton2Pressed(true);
  };

  const dayButtonClassName = `join-item btn my-3 ${isButton1Pressed ? 'btn-accent btn-active' : 'btn-success'}`;
  const weekButtonClassName = `join-item btn my-3 ${isButton2Pressed ? 'btn-accent btn-active' : 'btn-success'}`;

  return (
    <div className='flex flex-row justify-center gap-8'>
        <Link to="/" className="btn btn-success my-3">Submit timesheet</Link>
        <div className="join">
          <button className="join-item btn btn-outline btn-accent my-3">
            <img className="w-7 h-7" src="https://img.icons8.com/?size=512&id=40217&format=png" alt="prev" onClick={decrementDate} />
          </button>
          <button className="join-item btn btn-success my-3">{formattedDate }</button>
          <button className="join-item btn btn-outline btn-accent my-3">
            <img className="w-7 h-7" src="https://img.icons8.com/?size=512&id=7849&format=png" alt="next" onClick={incrementDate} />
          </button>
        </div>
        <button className="btn btn-success my-3" onClick={openModal}>Create Timesheet</button>
        <div className="join">
            <Link to="/dayviewtimesheet" className={dayButtonClassName} onClick={handleButton1Press}>Day</Link>
            <Link to="/weekviewtimesheet" className={weekButtonClassName} onClick={handleButton2Press}>Week</Link>
        </div>
        <button className="btn btn-success my-3">Sort by</button>        
    </div>
  )
}

export default Functionbar
