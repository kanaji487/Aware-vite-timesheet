import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DayChecked from "./components/DayChecked";
import Navbar from "./components/Navbar";

const DayviewTimesheet = () => {

  const [modal, setModal] = useState(false);
  let [customer, setCustomer] = useState();
  let [project, setProject] = useState();
  let [billtype, setBilltype] = useState();
  const [card, setCard] = useState({
    roleDropdownValue: 'default',
    taskDropdownValue: 'default',
    date: '',
    timestart: '',
    timeend: '',
    description: '',
  });
  const [allCards, setAllCards] = useState([]);
  const [readMore, setReadmore] = useState(false);
  const [date, setDate] = useState(new Date());
  const [isButton1Pressed, setButton1Pressed] = useState(false);
  const [isButton2Pressed, setButton2Pressed] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const allCardElements = allCards.map((theCard, index) => {
    return (
      <div key={index} className="my-4">
        <section className='flex flex-col bg-yellow-100 mx-auto rounded-md h-auto w-[40rem]'>
          <div className="flex flex-row justify-between">
            <h6 className='text-black text-lg font-bold mx-3 mt-1'>{theCard.roleDropdownValue}</h6>
            <div className="flex flex-row m-2">
              <img 
                src="https://img.icons8.com/?size=512&id=59770&format=png" 
                alt="edit"
                className="w-4 h-4 mx-2 cursor-pointer" 
              />
              <img 
                src="https://img.icons8.com/?size=512&id=3719&format=png" 
                alt="copy"
                className="w-4 h-4 mx-2 cursor-pointer" 
              />
              <img 
                src="https://img.icons8.com/?size=512&id=99971&format=png" 
                alt="delete"
                className="w-4 h-4 mx-2 cursor-pointer"
                onClick={() => onCardDeleted(index)}
              />
              <img 
                src="https://img.icons8.com/?size=512&id=60022&format=png" 
                alt="read"
                className="w-4 h-4 mx-2 cursor-pointer" 
              />
            </div>
          </div>
            
          <h6 className='text-black text-sm mx-3 mt-1'>{theCard.taskDropdownValue}</h6>
            <div className='flex flex-row'>
              <h6 className='text-black text-sm mx-3 mt-1'>{theCard.date}</h6>
              <h6 className='text-black text-sm mx-1 mt-1'>{theCard.timestart} - {theCard.timeend}</h6>
            </div>
          <h6 
            className='text-black text-sm mx-3 mt-1'>
              {readMore ? theCard.description: `${theCard.description.substring(0, 100)}...`}
              <button className="text-sky-600 font-bold ml-2" onClick={() => setReadmore(!readMore)}>
                {readMore ? 'show less' : 'read more'}
              </button>
            </h6>
          </section>
        </div>
      );
    });

  useEffect(() => {
    const storedData = localStorage.getItem("cardData");
    if (storedData) {
      setAllCards(JSON.parse(storedData));
    }
  }, []);

  const onCardValueChange = (event) => {
    const { name, value } = event.target;
    setCard((prevCard) => ({
      ...prevCard,
        [name]: value
    }));
  };

  const onCardSubmit = (event) => {
    event.preventDefault();
    const updateCardData = [...allCards, card];
    localStorage.setItem("cardData", JSON.stringify(updateCardData));

    setAllCards(updateCardData);
    setCard({
      roleDropdownValue: 'default',
      taskDropdownValue: 'default',
      date: '',
      timestart: '',
      timeend: '',
      description: '',
    })
    setModal(false);
  }

  const formattedDate = date.toLocaleDateString('en-EN', {
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

  const onCardDeleted = (index) => {
    const updatedCard = allCards.filter((card, i) => i !== index);
    localStorage.setItem("cardData", JSON.stringify(updatedCard));
    setAllCards(updatedCard);
  }

  return (
    <div className="h-screen w-screen bg-no-repeat bg-cover relative bg-blue-100/40">
      <Navbar />
      <div className="w-[50vw] mx-auto">
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
        <DayChecked />
        {/* Timesheet card */}
        {allCardElements}
      </div>
      { modal && (
        <section className="flex flex-col items-center backdrop-blur h-screen">
          <div className="flex flex-col justify-center gap-y-4 bg-yellow-100 mt-5 w-auto rounded-md">
            <div className="flex flex-row-reverse">
              <img 
                src="https://img.icons8.com/?size=512&id=8112&format=png" 
                alt="closemodal"
                className="w-5 h-5 mt-2 mr-2 cursor-pointer"
                onClick={closeModal} 
              />
              <form onSubmit={onCardSubmit}>
                {/* Customer box */}
                <div className='flex flex-row my-3'>
                  <label htmlFor="customer" className="ml-8 text-black">Customer :</label>
                  <select
                    className="ml-8"
                    value={customer}
                    onChange={(e)=> setCustomer(e.target.value)}
                  >
                    <option className="text-center">--Select--</option>
                    <option>Aware Corporation Limited</option>
                    <option>Aware Technology</option>
                    <option>AIES Corporation Ltd</option>
                  </select>
                </div>
                {/* Project box */}
                <div className='flex flex-row my-3'>
                  <label htmlFor="project" className="ml-8 text-black">Project :</label>
                  <select
                    className="ml-[50px]"
                    value={project}
                    onChange={(e) => setProject(e.target.value)}
                  >
                    <option className="text-center">--Select--</option>
                    <option>Aware-General-2023</option>
                    <option>Aware-General-2024</option>
                    <option>Aware-General-2023</option>
                  </select>
                </div>
                {/* Role box */}
                <div className='flex flex-row my-3'>
                  <label htmlFor="role" className="ml-8 text-black">Role :</label>
                  <select
                    className="ml-[70px]"
                    name="roleDropdownValue"
                    value={card.roleDropdownValue}
                    onChange={onCardValueChange}
                  >
                    <option className="text-center" value="default">--Select--</option>
                    <option value="Data scientist">Data scientist</option>
                    <option value="Quality assurance tester">Quality assurance tester</option>
                    <option value="Software engineer">Software engineer</option>
                  </select>
                </div>
                {/* Task box */}
                <div className='flex flex-row my-3'>
                  <label htmlFor="task" className="ml-8 text-black">Task :</label>
                  <select 
                    className="ml-[70px]"
                    name="taskDropdownValue"
                    value={card.taskDropdownValue}
                    onChange={onCardValueChange}
                  >
                    <option className="text-center" value="default">--Select--</option>
                    <option value="Assembling Data">Assembling Data</option>
                    <option value="Analyzing Data">Analyzing Data</option>
                    <option value="Extracting Insights">Extracting Insights</option>
                  </select>
                </div>
                {/* Bill type box */}
                <div className='flex flex-row my-3'>
                  <label htmlFor="billtype" className="ml-8 text-black">Bill type :</label>
                  <select 
                    className="ml-[44px]"
                    value={billtype}
                    onChange={(e) => setBilltype(e.target.value)}
                  >
                    <option className="text-center">--Select--</option>
                    <option>Regular</option>
                    <option>Overtime</option>
                    <option>Non-Billable</option>
                    <option>Overtime Nonbill</option>
                  </select>
                </div>
                {/* Datepicker box */}
                <div className="mx-8 flex flex-row justify-between">
                  <h6 className='text-black'>Date & time :</h6>
                  {/* Time box */}
                  <div className="flex flex-col">
                    {/* Time start */}
                    <div className="flex flex-row ml-3">
                      <h4 className="text-black">From</h4>
                      <input type="date" className="ml-3" name="date" value={card.date} onChange={onCardValueChange}></input>
                      <input type="time" className="ml-3" name="timestart" value={card.timestart} onChange={onCardValueChange}></input>
                    </div>
                    {/* Time end */}
                    <div className="flex flex-row ml-3 mt-4">
                      <h4 className="text-black">To</h4>
                      <input type="date" className="ml-8"></input>
                      <input type="time" className="ml-3" name="timeend" value={card.timeend} onChange={onCardValueChange}></input>
                    </div>
                  </div>
                </div>
                {/* Description box */}
                <div className='flex flex-row my-3'>
                  <h3 className='text-black ml-8'>Description</h3>
                  <textarea
                    className='w-[306px] ml-4 border-4 border-black p-2'
                    name="description"
                    onChange={onCardValueChange}
                  />
                </div>
                {/* Button box */}
                <div className='flex flex-row mt-1 w-full justify-center'>
                  <input type="submit" className="text-black bg-emerald-700 w-1/4 h-10 my-5 mx-3 rounded-lg cursor-pointer" value={"submit"} id="calc"/>
                  <button type="button" className="text-black bg-red-600 w-1/4 h-10 my-5 mx-3 rounded-lg"  onClick={() => closeModal(false)}>Cancel</button>
                </div>
              </form>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

export default DayviewTimesheet