import { useState } from "react";

const Modal = (openModal, onCardSubmit, role, setRole, task, setTask, onCardValueChange, card, closeModal) => {

  let [customer, setCustomer] = useState();
  let [project, setProject] = useState();
  let [billtype, setBilltype] = useState();

  return (
    <section className="flex flex-col items-center backdrop-blur-sm drop-shadow-xl h-screen mt-[-8rem]">
        <div className="flex flex-col justify-center gap-y-4 bg-yellow-100 mt-5 w-auto rounded-md">
            <div className="flex flex-row-reverse">
                <img 
                    src="https://img.icons8.com/?size=512&id=8112&format=png" 
                    alt="closemodal"
                    className="w-5 h-5 mt-2 mr-2"
                    onClick={openModal} 
                />
                <form onSubmit={onCardSubmit}>
                  {/* Customer box */}
                  <div className='flex flex-row my-3'>
                    <label className="ml-8">Customer :</label>
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
                      <label className="ml-8">Project :</label>
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
                      <label className="ml-8">Role :</label>
                      <select
                        className="ml-[70px]"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                      >
                        <option className="text-center">--Select--</option>
                        <option>Data scientist</option>
                        <option>Quality assurance tester</option>
                        <option>Software engineer</option>
                      </select>
                    </div>
                    {/* Task box */}
                    <div className='flex flex-row my-3'>
                      <label className="ml-8">Task :</label>
                      <select 
                        className="ml-[70px]"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                      >
                        <option className="text-center">--Select--</option>
                        <option>Assembling Data</option>
                        <option>Analyzing Data</option>
                        <option>Extracting Insights</option>
                      </select>
                    </div>
                    {/* Bill type box */}
                    <div className='flex flex-row my-3'>
                      <label className="ml-8">Bill type :</label>
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
                      <h6 className=''>Date & time :</h6>
                      {/* Time box */}
                      <div className="flex flex-col">
                        {/* Time start */}
                        <div className="flex flex-row ml-3">
                          <h4 className="">From</h4>
                          <input type="date" className="ml-3" name="date" value={card.date} onChange={onCardValueChange}></input>
                          <input type="time" className="ml-3" name="timestart" value={card.timestart} onChange={onCardValueChange}></input>
                        </div>
                        {/* Time end */}
                        <div className="flex flex-row ml-3 mt-4">
                          <h4 className="">To</h4>
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
  )
}

export default Modal
