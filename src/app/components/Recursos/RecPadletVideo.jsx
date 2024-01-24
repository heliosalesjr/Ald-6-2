import React from 'react'
import ReactPlayer from 'react-player'

function RecPadletVideo() {
  return (
    <div className='max-w-screen-5px mx-auto'>
        <div className="p-4 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 pr-4">
          <h1 className="text-2xl font-semibold mb-4 px-8 text-slate-700">Neste vídeo temos um tutorial de como utilizar a ferramenta Padlet e criar seu Diário de Bordo.</h1>
        </div>
        <div className="w-full md:w-1/2">
          <ReactPlayer url='https://youtu.be/-5uUe9Tzyyo' width="100%" />
        </div>
      </div>
    </div>
  )
}

export default RecPadletVideo