import React from 'react'

const Header = () => {
  return (
  <div className='py-5 px-5 md:px-12 lg:px-28'>
    <div className='flex items-center justify-between'>
      <h1 className='text-3xl font-bold text-yellow-400'>BLOGER</h1>
      <button className='flex items-center gap-2 font-medium py-1 px-4 sm:py-3 sm:px-6 border border-yellow-500 hover:bg-yellow-400 hover:text-white shadow-[-7px_7px_0px_#ffde21]'>GET STARTED</button>
      
    </div>
    <div className="text-center my-10">
      <h1 className='text-3xl font-bold'>Latest Blog</h1>
      <p className='mt-10 max-w-[740px] mx-auto text-xs sm:text-base'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex molestiae maxime nesciunt recusandae vel quos repellendus, quisquam non nobis natus, obcaecati dolor molestias, necessitatibus commodi consequuntur doloremque magnam officia. Dolorem atque, fugit eaque !</p>
      <form className='flex items-center justify-between max-w-[700px] scale-75 sm-scale-100 mx-auto mt-10 border border-gray-300 shadow-[-7px_7px_0px_#ffde21]' action="">
        <input type="email" placeholder='Masukan Email Anda' className='outline-none  py-2 px-4 w-full' />
        <button  type='submit' className="inline-flex items-center justify-center px-8 py-3 font-sans font-semibold hover:bg-yellow-400 hover:text-white">
          Subscribe
        </button>
      </form>
    </div>
</div>
  )
}

export default Header