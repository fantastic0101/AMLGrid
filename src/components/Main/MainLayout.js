import React from 'react';
import { Layout } from 'antd';
import Button from '../Button';

const { Header, Content, Sider } = Layout;

const MainLayout = ({ children }) => {

  return (
    <Layout className='w-full' hasSider>
      <Sider className='border-secondary-light border-r-1 min-w-80' style={{
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
          <img src='/assets/images/logo.png' alt='icon' />
        </div>
        <ul className='px-4'>
          <li className='px-2 py-2 rounded-md bg-primary text-white flex items-center'>
            <img src='/assets/images/chart.svg' alt='icon' />
            <span className='pl-2 text-sm'>AML Check</span>
          </li>
          <li className='px-2 py-2 mt-2 rounded-md bg-white text-secondary-dark flex items-center'>
            <img src='/assets/images/profile-circle.svg' alt='icon' />
            <span className='pl-2 text-sm'>Profile</span>
          </li>
          <li className='px-2 py-2 mt-2 rounded-md bg-white text-secondary-dark flex items-center'>
            <img src='/assets/images/shop.svg' alt='icon' />
            <span className='pl-2 text-sm'>Check History</span>
          </li>
          <li className='px-2 py-2 mt-2 rounded-md bg-white text-secondary-dark flex items-center'>
            <img src='/assets/images/invoice-01.svg' alt='icon' />
            <span className='pl-2 text-sm'>Api Documentation</span>
          </li>
          <li className='px-2 py-2 mt-2 rounded-md bg-white text-secondary-dark flex items-center'>
            <img src='/assets/images/setting.svg' alt='icon' />
            <span className='pl-2 text-sm'>Settings</span>
          </li>
          <li className='px-2 py-2 mt-2 rounded-md bg-white text-secondary-dark flex items-center'>
            <img src='/assets/images/message-question.svg' alt='icon' />
            <span className='pl-2 text-sm'>Support Ticket</span>
          </li>
          <li className='px-2 py-2 mt-2 rounded-md bg-white text-secondary-dark flex items-center'>
            <img src='/assets/images/sun-01.svg' alt='icon' />
            <span className='pl-2 text-sm'>Theme: Light</span>
          </li>
        </ul>
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