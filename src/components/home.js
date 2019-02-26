import React from 'react';
import {} from 'element-react';
import Header from './common/header';
import Sidebar from './common/sidebar';
class Home extends React.Component{
	render(){
		return(
			<div>
                <Header/>
                <div>
                    <Sidebar />
                </div>
			</div>
		);
	}
}
export default Home;