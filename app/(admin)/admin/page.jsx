import StatisticCard from './components/StatisticCard'
import { FaShoppingCart, FaStar } from 'react-icons/fa'

const Home = () => {
  return (
    <div>
      <h1 className='text-2xl lg:text-3xl font-bold my-4'>Home</h1>
      <div className='w-full text-[#45454E] p-2'>
        <div className='flex flex-wrap lg:flex-nowrap justify-center items-center gap-10 w-full text-[#7f7f86]'>
          <StatisticCard
            icon={
              <FaShoppingCart className='p-1.5 text-6xl text-white rounded-lg bg-primary-900' />
            }
            number={5}
            title='Num. of Products'
          />
          <StatisticCard
            icon={
              <FaStar className=' p-1.5 text-6xl text-white rounded-lg bg-primary-900' />
            }
            number={3}
            title='Num. of Specials'
          />
        </div>
      </div>

      {/* <div className='flex flex-col gap-4 my-10'>
        <h3 className='text-xl lg:text-2xl font-bold'>أحدث المسجلين</h3>
        <div className='overflow-y-auto no-scrollbar'>
          <table className='table-auto w-[1000px] lg:w-full bg-primary-900 rounded-xl overflow-hidden'>
            <thead>
              <tr className='border-b text-white'>
                {studentsHead.map((item, i) => (
                  <th className='p-4 text-center font-normal' key={i}>
                    {item}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {students
                ?.sort((a, b) => a.id - b.id)
                .map((stu) => (
                  <tr
                    className='text-center even:bg-white odd:bg-gray-100'
                    key={stu.id}
                  >
                    <td className='p-4'>{stu.fullName}</td>
                    <td>{stu.natID}</td>
                    <td>{stu.jobID}</td>
                    <td>{stu.mobileNumber}</td>
                    <td>{stu.branch || ''}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div> */}
    </div>
  )
}

export default Home
