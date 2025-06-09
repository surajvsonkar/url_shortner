
import UrlForm from '../components/UrlForm'

const HomePage = (props) => {

    
  return (
    <>
    <div className='min-h-screen bg-gray-100 flex flex-col items-center justify-center'>
        <div className='bg-white p-8 rounded-lg shadow-md w-full max-w-md'>
        <UrlForm/>
        </div>
    </div>
    </>
  )
}

export default HomePage