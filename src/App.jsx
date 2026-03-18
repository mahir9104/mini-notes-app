import { Trash2 } from 'lucide-react'
import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  const [detail, setDetail] = useState('')
  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    if (title === '') {
      return
    }

    const copyTask = [...task]
    copyTask.push({ title, detail })
    setTask(copyTask)

    setTitle('')
    setDetail('')

  }
  const dltNote = (idx) => {
    const updated = task.filter((_, i) => i !== idx)
    setTask(updated)
  }


  return (
    <div className='lg:h-screen bg-black text-white lg:flex  '>

      <form onSubmit={submitHandler} className='   lg:w-1/2 flex p-10 justify-between items-start gap-6'>
        <div className="flex flex-col w-full   items-start gap-6">
          <h1 className=' text-4xl font-bold pb-10'>Add Notes</h1>

          <input
            className='px-6 py-4 w-full  text-2xl border-2 rounded outline-0'
            type="text" placeholder='Enter Heading Task'
            value={title}
            onChange={(e) => {
              setTitle(e.target.value)
            }}

          />

          <textarea
            className='px-6 h-64 py-6 w-full  text-2xl border-2 rounded outline-0'
            type="text"
            placeholder='Write Detail'
            value={detail}
            onChange={(e) => {
              setDetail(e.target.value)
            }}
          />

          <button
            className='bg-white w-full  text-black  px-6 py-6 text-2xl outline-0 font-bold border-2 rounded hover:bg-blue-300 '>
            Add Notes
          </button>
        </div>
      </form>

      <div className=" overflow-auto   p-10 lg:w-1/2 lg:px-10 ">
        <h1 className=' text-4xl font-bold pb-10'>Your Notes</h1>

        <div className="flex justify-center flex-wrap gap-6 text-white">
          {task.map((elem, idx) => {
            return <div key={idx} className="w-64 min-h-64 bg-white rounded-2xl p-4 flex flex-col justify-between">
              <div className="">
                <h1 className='text-black text-3xl font-bold pb-3'>{elem.title}</h1>
                <p className='text-lg text-gray-500 '>{elem.detail}</p>
              </div>

              <div className="flex justify-end">
                <button onClick={() => {
                  dltNote(idx)
                }} className='text-black cursor-pointer'><Trash2 /></button>
              </div>
            </div>

          })}
        </div>

      </div>
    </div>
  )
}

export default App

