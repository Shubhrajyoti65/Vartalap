import React from 'react'
import Sidebar from '../components/Sidebar'
import ChatContainer from '../components/ChatContainer'
import RightSidebar from '../components/RightSidebar'

const HomePage = () => {
  const[selectedUser, setSelectedUser] = useState(false);
  return (
    <div className='border w-full h-screen sm:px-[15%] sm:py-[5%]'>
     <div children= {`backdrop-blur-x1 border-2 border-gray-600 rounded-2xl overflow-hidden h-[100%] grid grid-cols-1 relative ${selectedUser ? 'md:grid-cols-[1fr_1.5fr_1fr] x1:grid-cols-[1fr_2fr_1fr]':'md:grid-cols-2'}`}>
        <Sidebar />
        <ChatContainer/>
        <RightSidebar />
     </div>
    </div>
  )
}

export default HomePage
