import React from 'react'

export default function header() {
  return (
    <div>

      <section className='flex justify-center space-x-4 w-full h-16 bg-fundo_nav text-cinza_fonte rounded-b-2xl space-x-16' >
        <div className='my-4 text-3xl'>D.A.R.P</div>
        <div className='my-4 '>Operação</div>
        <div className='my-4 '>Materiais</div>
        <div className='my-4 '>Home</div>
        <div className='my-4 '>Bibliografia</div>
        <div className='my-4'>Membros</div>
      </section>
        
    </div>
  )
}
