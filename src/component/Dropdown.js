import React from 'react';
import 'antd/dist/antd.css';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';

const menu = (
  <Menu
    items={[
      {
        key: '1',
        label: (
          <a >
            Mobile Phones
          </a>
        ),
      },
      {
        key: '2',
        label: (
          <a >
          Cars,Motorcycle

          </a>
        ),
      },
      {
        key: '3',
        label: (
          <a >
         Motorcycles
          </a>
        ),
      },
      {
        key: '4',
      },
    ]}
  />
);

const Down = () => (
  <Dropdown overlay={menu}>
    <a onClick={(e) => e.preventDefault()} style= {{color:"black"}}>
      <Space>
        All CATEGORIES
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);

export default Down;