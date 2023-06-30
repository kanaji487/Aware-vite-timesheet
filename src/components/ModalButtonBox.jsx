

const ModalButtonBox = (closeModal) => {
  return (
    <div className='flex flex-row mt-1 w-full justify-center'>
        <input type="submit" className="text-black bg-emerald-700 w-1/4 h-10 my-5 mx-3 rounded-lg cursor-pointer" value={"submit"} id="calc"/>
        <button type="button" className="text-black bg-red-600 w-1/4 h-10 my-5 mx-3 rounded-lg"  onClick={() => closeModal(false)}>Cancel</button>
    </div>
  )
}

export default ModalButtonBox
