import LoginForm from '@/components/login/LoginForm'
import React from 'react'

const page = () => {
  return (
    <main className='w-full min-h-screen p-[20px] pt-[8rem] bg-slate-100 flex flex-col justify-center'>
     <LoginForm/>
    </main>
  )
}

export default page