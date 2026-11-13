
function login() {
  return (
   <div>
      <div className='bg-slate-600 w-100 h-100 ml-190 mt-50'>
        < input className='bg-mist-400 text-white mt-15 ml-15 w-70 h-10 text-3xl rounded' type="text" placeholder='Name' />
        <br />
         < input className='bg-mist-400 text-white mt-10 w-70 h-10 ml-15 text-3xl rounded' type="text" placeholder='Password' />
         <br />
          < input className='bg-mist-400 text-white mt-10 w-70 h-10 ml-15 text-3xl rounded' type="text" placeholder='Email addres' />
          <br />
          <button className='w-70 h-10 bg-emerald-400 mt-10 text-2xl ml-15 rounded'>Create</button>
         
          <div className='flex gap-5 ml-20'>
             <p className='text-white text-[14px] '>Alreadry registered?</p>
            <p className='text-green-400 text-[15px] ' >sign in?</p>
          </div>
      </div>
    </div>
  )
}  
 export default login 
