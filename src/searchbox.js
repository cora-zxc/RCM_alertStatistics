import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Input, Space } from 'antd';

const { Search } = Input;
const onSearch = value => console.log(value);

class Searchbox extends React.Component {
    constructor(props){
        super(props);
        this.state={
        }
    }
    render() {
      return (
        <Space>
            <Search 
                placeholder="關鍵字搜尋" 
                allowClear
                onSearch={onSearch} 
                style={{ width: 180 }} 
            />
        </Space>
      );
    }
}

export default Searchbox