import React,{ Component } from 'react';
// 引入 ECharts 主模块
var echarts = require('echarts');
// import echarts from 'echarts/lib/echarts';
// import 'echarts/lib/chart/line';
// // 引入提示框和标题组件
// import 'echarts/lib/component/tooltip';
// import 'echarts/lib/component/title';

export default class Echarts extends Component {
    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));
        // 绘制图表
        myChart.setOption({
            title: { text: '放/还款统计' },
            tooltip: {
              trigger: 'axis'
            },
            legend: {
              data: ['放款记录', '还款记录']
            },
            xAxis: {
                data: ["周四", "周五", "周六", "周日", "周一", "周二", "周三"]
            },
            yAxis: {},
            series: [{
                name: '放款记录',
                type: 'line',
                data: [5, 20, 36, 10, 10, 20, 55]
            }, {
              name: '还款记录',
              type: 'line',
              data: [1, 40, 20, 99, 67, 23, 89]
            }]
        });
    }
    render() {
        return (
            <div id="main" style={{ width: 600, height: 400 }}></div>
        );
    }
}