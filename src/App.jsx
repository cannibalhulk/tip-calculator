import './App.css'
import {BiDollar} from 'react-icons/bi'
import {FaUser} from 'react-icons/fa'
import { useState } from 'react'

function App() {
  const [tip,setTip] = useState(0)
  const [custom,setCustom] = useState('')
  const [bill,setBill] = useState('')
  const [people, setPeople] = useState('')

  const billPerPerson = parseFloat(Number(bill) / Number(people)).toFixed(2)

  const tipAmount = parseFloat(billPerPerson*tip/100).toFixed(2)
  const total = parseFloat(billPerPerson + tipAmount).toFixed(2)

  const customTip = parseFloat(billPerPerson*Number(custom)/100).toFixed(2)

  const customTotal = parseFloat(billPerPerson + customTip).toFixed(2)



  return (
    <div className=" flex flex-col items-center justify-center w-full h-screen bg-primary">
      <div className='mb-[80px] flex flex-col font-spacemono tracking-[5px] text-input text-[24px]'>SPLI<span className='mt-0'>TTER</span></div>
      <div className=' items-center flex flex-col w-full lg:flex-row md:w-auto bg-secondary rounded-2xl border-[2px] border-3 p-7'>
        
        <div className="max-w-[360px] px-3 py-2">
          <div>
            <label className='font-spacemono text-input2' htmlFor="bill">Bill</label>
            <div className='mt-2 mb-8 rounded-md flex p-1 bg-input2 items-center'>
              <BiDollar className='text-input font text-[22px]'/>
              <input required onChange={(e)=>setBill(e.target.value)} placeholder='0' id="bill" className='placeholder:text-input px-2 text-[24px] text-secondary font-spacebold text-end bg-input2 outline-none' type="text" />
            </div>

            <div>
              <label className='font-spacemono text-input2' htmlFor='tip'>Select Tip %</label>
              <div className='grid gap-3 grid-cols-3 mt-4 mb-8 items-center'>
                <button onClick={()=>setTip(5)} className='active:bg-1 active:text-3 flex justify-center rounded-md px-4 py-1 bg-3 text-1 font-spacebold text-[24px]'>5%</button>
                <button onClick={()=>setTip(10)} className='active:bg-1 active:text-3 flex justify-center rounded-md px-4 py-1 bg-3 text-1 font-spacebold text-[24px]'>10%</button>
                <button onClick={()=>setTip(15)} className='active:bg-1 active:text-3 flex justify-center rounded-md px-4 py-1 bg-3 text-1 font-spacebold text-[24px]'>15%</button>
                <button onClick={()=>setTip(25)} className='active:bg-1 active:text-3 flex justify-center rounded-md px-4 py-1 bg-3 text-1 font-spacebold text-[24px]'>25%</button>
                <button onClick={()=>setTip(50)} className='active:bg-1 active:text-3 flex justify-center rounded-md px-4 py-1 bg-3 text-1 font-spacebold text-[24px]'>50%</button>
                <input placeholder='Custom' type={'text'} onClick={()=>setTip(null)} onChange={(e)=>setCustom(e.target.value)} className=' placeholder:text-secondary px-1 py-1 text-[24px] text-secondary font-spacebold bg-input2 outline-none rounded-md text-center'/>
              </div>
            </div>

            <div>
              <label className='font-spacemono text-input2' htmlFor="people">Number of People</label>
              <div className='mt-2 mb-8 rounded-md flex p-1 bg-input2 items-center'>
                <FaUser className='text-input pl-1 font text-[20px]'/>
                <input required onChange={(e)=>setPeople(e.target.value)} placeholder='0' id="people" className='placeholder:text-input px-2 text-[24px] text-secondary font-spacebold text-end bg-input2 outline-none' type="text" />
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col justify-between h-[300px] p-7 lg:ml-6 w-[360px] rounded-2xl bg-checkout'>

          <div>
            <div className='flex justify-between'>
              <div>
                <p className='font-spacebold text-input2'>Tip Amount</p>
                <p className='font-spacebold text-input text-[13px]'>/ person</p>
              </div>

              <div className='flex items-center'>
                <BiDollar className='text-1 font text-[30px]'/>
                <p className='text-1 font-spacebold text-[30px]'>{ tipAmount ? tipAmount : "0.00" }</p>
              </div>
            </div>

            <div className='mt-8 flex justify-between'>
              <div>
                <p className='font-spacebold text-input2'>Total</p>
                <p className='font-spacebold text-input text-[13px]'>/ person</p>
              </div>

              <div className='flex items-center'>
                <BiDollar className='text-1 font text-[30px]'/>
                <p className='text-1 font-spacebold text-[30px]'>{ total}</p>
              </div>

            </div>

          </div>

          <button onClick={function(){
            setTip(0)
            setPeople('')
            setBill()
          }} className='w-full bg-1 font-spacebold text-checkout active:bg-[#2991f8] rounded-md py-2 tracking-[1px]'>RESET</button>

          
        </div>

      </div>
    </div>
  )
}

export default App
