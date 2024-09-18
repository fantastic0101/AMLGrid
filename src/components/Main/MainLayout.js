import React, { useEffect, useState } from 'react';
import { Layout } from 'antd';
import Button from '../Button';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/actions/authAction';

const { Header, Content, Sider } = Layout;
const sideList = [
  { path: '/home', label: 'AML Check', icon: '/assets/images/chart.svg' },
  { path: '/profile', label: 'Profile', icon: '/assets/images/profile-circle.svg' },
  { path: '/check_history', label: 'Check History', icon: '/assets/images/shop.svg' },
  { path: '/docs', label: 'Api Documentation', icon: '/assets/images/invoice-01.svg' },
  { path: '/setting', label: 'Setting', icon: '/assets/images/setting.svg' },
  { path: '/support_ticket', label: 'Support Ticket', icon: '/assets/images/message-question.svg' },
  { path: '/theme', label: 'Theme: Light', icon: '/assets/images/sun-01.svg' }
];

const MainLayout = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate(); // Use useNavigate hook
  const dispatch = useDispatch();
  const { pathname } = location;

  const [sidebarKey, setSidebarKey] = useState(0);

  useEffect(() => {
    setSidebarKey((prevKey) => prevKey + 1);
  }, [pathname]);

  // Function to handle logout click
  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch(logout());
    navigate('/signin'); // Use navigate to redirect
  };

  return (
    <Layout className='w-full' hasSider>
      <Sider key={sidebarKey} className='border-secondary-light border-r-1 min-w-80' style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        insetInlineStart: 0,
        top: 0,
        bottom: 0,
        scrollbarWidth: 'thin',
        scrollbarColor: 'unset',
        backgroundColor: 'white',
        minWidth: '300px !important'
      }}>
        <div className="px-3 pt-6 pb-12">
          <Link to='/home'>
            <img src='/assets/images/logo.png' alt='icon' />
          </Link>
        </div>
        <ul className='px-4 cursor-pointer'>
          {sideList.map((item, index) => (
            <Link key={index} className='flex items-center w-full' to={item.path}>
              <li className={`px-2 py-2 mt-2 rounded-md flex items-center w-full ${item.path === pathname ? 'bg-primary text-white' : 'bg-white text-secondary-dark'
                }`}>
                <img src={item.icon} alt='icon' />
                <span className='pl-2 text-sm'>{item.label}</span>
              </li>
            </Link>
          ))}
        </ul>
        <div
          className='absolute bottom-4 p-4 border-t-1 border-secondary-light w-calc-100-2rem mx-4 flex items-center'
          onClick={handleLogout} // Attach onClick handler
          style={{ cursor: 'pointer' }} // Change cursor to pointer for better UX
        >
          <img src='/assets/images/logout.svg' alt='icon' />
          <span className='text-base font-medium pl-2'>Log out</span>
        </div>
      </Sider>
      <Layout style={{ marginInlineStart: 200 }}>
        <Header className="py-4 px-4 bg-white flex flex-col sm:flex-row justify-between items-start sm:items-center h-auto sm:h-20 border-b border-secondary-light">
          <span className="text-2xl sm:text-3xl font-semibold">AML Check</span>
          <div className="flex flex-col sm:flex-row justify-center items-start sm:items-end mt-3 sm:mt-0">
            <Button className="bg-primary text-white text-sm sm:text-base p-2 sm:p-3 rounded-md mb-2 sm:mb-0" label="Prescott Aldem" />
            <Button
              className="bg-white text-black text-sm sm:text-base p-2 sm:p-3 rounded-md sm:ml-2 border border-secondary flex justify-center items-center"
              label="EN"
              icon="/assets/images/EN.png"
              iconPosition="right"
              iconPadding="0 0 0 4px"
            />
          </div>
        </Header>
        <Content style={{ overflow: 'initial' }}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;