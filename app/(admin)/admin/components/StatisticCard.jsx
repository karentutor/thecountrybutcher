const StatisticCard = ({ title, icon, number }) => {
  return (
    <div className='border w-[300px] p-4 text-xl rounded-xl border-gray-300 shadow-[0_2px_20px_-10px_rgba(0,0,0,0.3)] hover:-translate-y-1 transition-all duration-200'>
      <div className='flex items-center justify-center gap-8'>
        <span className='p-2'>{icon}</span>
        <div className='flex flex-col gap-5 items-center h-24 font-bold'>
          <p className='text-base lg:text-lg w-full font-semibold'>{title}</p>
          <p className='text-4xl'>{number}</p>
        </div>
      </div>
    </div>
  )
}

export default StatisticCard
