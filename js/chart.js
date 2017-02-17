        


        require.config({
            paths: {
                echarts: 'echarts-2.2.7/build/dist'
            }
        });
        require(
            [
                'echarts',
                'echarts/chart/bar',
                'echarts/chart/pie',
                'echarts/chart/line',
                'echarts/chart/funnel',
                'echarts/chart/scatter'
            ],
            function (ec) {

            var genderChart = ec.init(document.getElementById('gender')); 
            var ageChartPie = ec.init(document.getElementById('agePie'));
            var ageChartLine = ec.init(document.getElementById('ageLine')); 
            var ill = ec.init(document.getElementById('ill')); 
            var thyroidTreat = ec.init(document.getElementById('thyroidTreat')); 
            var operation = ec.init(document.getElementById('operation')); 
            var familyHistory = ec.init(document.getElementById('familyHistory')); 
            var recovery = ec.init(document.getElementById('recovery'));
            var sequela = ec.init(document.getElementById('sequela'));
            var iodine = ec.init(document.getElementById('iodine'));
            Gender = {
                title : {
                    text: 'Graves病男女比例',
                    subtext: '共享杯数据',
                    x:'center'
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient : 'vertical',
                    x : 'left',
                    data:['男','女']
                },
                toolbox: {
                    show : true,
                    feature : {
                        mark : {show: true},
                        dataView : {show: true, readOnly: false},
                        magicType : {
                            show: true, 
                            type: ['pie', 'funnel'],
                            option: {
                                funnel: {
                                    x: '25%',
                                    width: '50%',
                                    funnelAlign: 'left',
                                    max: 1548
                                }
                            }
                        },
                        restore : {show: true},
                        saveAsImage : {show: true}
                    }
                },
                calculable : true,
                series : [
                    {
                        name:'Graves男女比例',
                        type:'pie',
                        radius : '55%',
                        center: ['50%', '60%'],
                        data:[
                            {value:19, name:'男'},
                            {value:81, name:'女'}
                        ]
                    }
                ]
            };
            AgePie = {
                title : {
                    text: 'Graves病年龄比例',
                    subtext: '共享杯数据',
                    x:'center'
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient : 'vertical',
                    x : 'left',
                    data:["10-20岁","20-30岁","30-40岁","40-50岁","50-60岁","60-70岁","70+岁"]
                },
                toolbox: {
                    show : true,
                    feature : {
                        mark : {show: true},
                        dataView : {show: true, readOnly: false},
                        magicType : {
                            show: true, 
                            type: ['pie', 'funnel'],
                            option: {
                                funnel: {
                                    x: '25%',
                                    width: '50%',
                                    funnelAlign: 'left',
                                    max: 1548
                                }
                            }
                        },
                        restore : {show: true},
                        saveAsImage : {show: true}
                    }
                },
                calculable : true,
                series : [
                    {
                        name:'Graves病年龄比例',
                        type:'pie',
                        radius : '55%',
                        center: ['50%', '60%'],
                        data:[
                            {value:1, name:'10-20岁'},
                            {value:26, name:'20-30岁'},
                            {value:26, name:'30-40岁'},
                            {value:20, name:'40-50岁'},
                            {value:16, name:'50-60岁'},
                            {value:10, name:'60-70岁'},
                            {value:1, name:'70+岁'}
                        ]
                    }
                ]
            };
            AgeLine = {
                title : {
                    text: 'Graves病年龄比例',
                    subtext: '共享杯数据'
                },
                tooltip : {
                    trigger: 'axis'
                },
                legend: {
                    data:['年龄']
                },
                toolbox: {
                    show : true,
                    feature : {
                        mark : {show: true},
                        dataView : {show: true, readOnly: false},
                        magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                        restore : {show: true},
                        saveAsImage : {show: true}
                    }
                },
                calculable : true,
                xAxis : [
                    {
                        name : '年龄',
                        type : 'category',
                        boundaryGap : false,
                        data : ["10-20岁","20-30岁","30-40岁","40-50岁","50-60岁","60-70岁","70+岁"]
                    }
                ],
                yAxis : [
                    {
                        name : '人数比例(%)',
                        type : 'value'
                    }
                ],
                series : [
                    {
                        name:'年龄分布',
                        type:'line',
                        smooth:true,
                        itemStyle: {normal: {areaStyle: {type: 'default'}}},
                        data:[1,26,26,20,16,10,1]
                    }
                ]
            };
            Ill = {
                title : {
                    text: 'Graves病合并症',
                    subtext: '共享杯数据'
                },
                tooltip : {
                    trigger: 'axis'
                },
                legend: {
                    data:['合并症']
                },
                toolbox: {
                    show : true,
                    feature : {
                        mark : {show: true},
                        dataView : {show: true, readOnly: false},
                        magicType : {show: true, type: ['line', 'bar']},
                        restore : {show: true},
                        saveAsImage : {show: true}
                    }
                },
                calculable : true,
                xAxis : [
                    {
                        name : '合并症',
                        type : 'category',
                        data : ['甲亢性心脏病','周期性麻痹','重症肌无力','系统性红斑狼疮','糖尿病','突眼','甲状腺肿大']
                    }
                ],
                yAxis : [
                    {
                        type : 'value',
                        name : '人数比例(%)'
                    }
                ],
                series : [
                    {
                        name:'合并症',
                        type:'bar',
                        data:[3, 3, 0, 0, 30,98, 75],
                        markPoint : {
                            data : [
                                {type : 'max', name: '最大值'},
                                {type : 'min', name: '最小值'}
                            ]
                        },
                        markLine : {
                            data : [
                                {type : 'average', name: '平均值'}
                            ]
                        }
                    }
                ]
            };                    
            ThyroidTreat = {
                title : {
                    text: 'Graves病病人病史',
                    subtext: '抗甲状腺药物治疗',
                    x:'right'
                },
                tooltip : {
                    trigger: 'axis',
                    formatter: "{a}<br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient : 'vertical',
                    x : 'left',
                    data:['曾抗甲状腺药物治疗','未曾抗甲状腺药物治疗']
                },
                toolbox: {
                    show : false,
                    feature : {
                        mark : {show: false},
                        dataView : {show: true, readOnly: false},
                        magicType : {
                            show: false, 
                            type: ['pie', 'funnel'],
                            option: {
                                funnel: {
                                    x: '25%',
                                    width: '50%',
                                    funnelAlign: 'left',
                                    max: 1548
                                }
                            }
                        },
                        restore : {show: true},
                        saveAsImage : {show: true}
                    }
                },
                calculable : true,
                series : [
                    {
                        name:'抗甲状腺药物治疗比例',
                        type:'pie',
                        radius : '55%',
                        center: ['50%', '60%'],
                        data:[
                            {value:71, name:'曾抗甲状腺药物治疗'},
                            {value:29, name:'未曾抗甲状腺药物治疗'}
                        ]
                    }
                ]
            };
            Operation = {
                title : {
                    text: 'Graves病病人病史',
                    subtext: '既往手术治疗',
                    x:'right'
                },
                tooltip : {
                    trigger: 'axis',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient : 'vertical',
                    x : 'left',
                    data:['曾手术治疗','未曾手术治疗']
                },
                toolbox: {
                    show : false,
                    feature : {
                        mark : {show: true},
                        dataView : {show: true, readOnly: false},
                        magicType : {
                            show: false, 
                            type: ['pie', 'funnel'],
                            option: {
                                funnel: {
                                    x: '25%',
                                    width: '50%',
                                    funnelAlign: 'left',
                                    max: 1548
                                }
                            }
                        },
                        restore : {show: true},
                        saveAsImage : {show: true}
                    }
                },
                calculable : true,
                series : [
                    {
                        name:'既往手术治疗',
                        type:'pie',
                        radius : '55%',
                        center: ['50%', '60%'],
                        data:[
                            {value:4, name:'曾手术治疗'},
                            {value:96, name:'未曾手术治疗'}
                        ]
                    }
                ]
            };
            FamilyHistory = {
                title : {
                    text: 'Graves病病人病史',
                    subtext: '家族史',
                    x:'right'
                },
                tooltip : {
                    trigger: 'axis',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient : 'vertical',
                    x : 'left',
                    data:['有家族史','无家族史']
                },
                toolbox: {
                    show : false,
                    feature : {
                        mark : {show: true},
                        dataView : {show: true, readOnly: false},
                        magicType : {
                            show: false, 
                            type: ['pie', 'funnel'],
                            option: {
                                funnel: {
                                    x: '25%',
                                    width: '50%',
                                    funnelAlign: 'left',
                                    max: 1548
                                }
                            }
                        },
                        restore : {show: true},
                        saveAsImage : {show: true}
                    }
                },
                calculable : true,
                series : [
                    {
                        name:'家族史',
                        type:'pie',
                        radius : '55%',
                        center: ['50%', '60%'],
                        data:[
                            {value:13, name:'有家族史'},
                            {value:87, name:'无家族史'}
                        ]
                    }
                ]
            };
            Recovery = {
                title : {
                    text: 'Graves病病人治疗后康复情况',
                    subtext: '共享杯数据'
                },
                tooltip : {
                    trigger: 'axis'
                },
                legend: {
                    data:['完全康复','部分康复','未康复']
                },
                toolbox: {
                    show : true,
                    feature : {
                        mark : {show: true},
                        dataView : {show: true, readOnly: false},
                        magicType : {show: true, type: ['line', 'bar']},
                        restore : {show: true},
                        saveAsImage : {show: true}
                    }
                },
                calculable : true,
                xAxis : [
                    {
                        name : '时间',
                        type : 'category',
                        data : ['3月后','6月后','9月后','一年后','两年后','三年后']
                    }
                ],
                yAxis : [
                    {
                        name : '比例%',
                        type : 'value'
                    }
                ],
                series : [
                    {
                        name:'完全康复',
                        type:'bar',
                        data:[70, 83, 77, 79, 85, 92],
                        markPoint : {
                            data : [
                                {type : 'max', name: '最大值'},
                                {type : 'min', name: '最小值'}
                            ]
                        },
                        markLine : {
                            data : [
                                {type : 'average', name: '平均值'}
                            ]
                        }
                    },
                    {
                        name:'部分康复',
                        type:'bar',
                        data:[30, 17,23, 21,15,8],
                        markPoint : {
                            data : [
                                {name : '年最高', value : 182.2, xAxis: 7, yAxis: 183, symbolSize:18},
                                {name : '年最低', value : 2.3, xAxis: 11, yAxis: 3}
                            ]
                        },
                        markLine : {
                            data : [
                                {type : 'average', name : '平均值'}
                            ]
                        }
                    },
                    {
                        name:'未康复',
                        type:'bar',
                        data:[0, 0, 0, 0,0, 0],
                        markPoint : {
                            data : [
                                {name : '年最高', value : 0, xAxis: 7, yAxis: 183, symbolSize:18},
                                {name : '年最低', value :0, xAxis: 11, yAxis: 3}
                            ]
                        },
                        markLine : {
                            data : [
                                {type : 'average', name : '平均值'}
                            ]
                        }
                    }
                ]
            };
            Sequela = {
                
              //设置时间轴
              timeline : {
                type : 'number',
                //时间轴时间列表
                data:[
                    '3月后','6月后','9月后','1年后','2年后','3年后'
                    ],
                //自定义处理，只显示年份
                /*label:{
                   formatter : function(s) {
                    return s.slice(0, 4);
                   }      
                },*/

                //时间轴的位置设定
                height:80,
                x:50,
                padding:[40,10,10,10],
                //时间轴播放控制
                autoPlay : true,
                playInterval : 2000
              },
              //设置数据点
              options : [
              //2002年数据表
                {
                  title:{  
                    text:'3月后的后遗症状况',  
                    subtext:'共享杯数据'  
                  },  
                  //设置提示  
                  tooltip: {  
                    show: true  
                  },  
                  //设置图例  
                  legend: {  
                    data:['人数']  
                  },  
                  //设置坐标轴  
                  xAxis : [  
                    {  
                        name : '症状',
                      type : 'category',  
                      data : ["甲减人数","甲亢人数","甲功能正常人数"],
                      axisLabel:{
                        margin:-20,
                        textStyle:{
                          color:'#999',
                          fontWeight:'bold'
                       }
                     }
                    }  
                  ],  
                  yAxis : [  
                    { 
                        name : '百分比(%)' ,
                      type : 'value'  
                    }  
                  ],  
                  series : [
                    {
                      type:'bar',
                      data:[42,0,0],
                      //绘制平均线  
                      markLine : {  
                        data : [  
                          {type : 'average', name: '平均值'}  
                        ]  
                      },  
                      //绘制最高最低点  
                      markPoint : {  
                        data : [  
                          {type : 'max', name: '最大值'},  
                          {type : 'min', name: '最小值'}  
                        ]  
                      }  
                    }
                  ]
                },
                //2003年数据表
                {
                  title:{  
                    text:'6月后的后遗症状况',  
                    subtext:'共享杯数据'  
                  },   
                  series : [
                    {
                      type:'bar',
                      data:[52,0,0],
                       //绘制平均线  
                      markLine : {  
                        data : [  
                          {type : 'average', name: '平均值'}  
                        ]  
                      },  
                      //绘制最高最低点  
                      markPoint : {  
                        data : [  
                          {type : 'max', name: '最大值'},  
                          {type : 'min', name: '最小值'}  
                        ]  
                      }  
                    }
                  ]
                },
                //2004年数据表
                {
                  title:{  
                    text:'9月后的后遗症状况',  
                    subtext:'共享杯数据'  
                  },  
                  series : [
                    {
                      type:'bar',
                      data:[41,0,0],
                       //绘制平均线  
                      markLine : {  
                        data : [  
                          {type : 'average', name: '平均值'}  
                        ]  
                      },  
                      //绘制最高最低点  
                      markPoint : {  
                        data : [  
                          {type : 'max', name: '最大值'},  
                          {type : 'min', name: '最小值'}  
                        ]  
                      }  
                    }
                  ]
                },
                //2005年数据表
                {
                  title:{  
                    text:'1年后的后遗症状况',  
                    subtext:'共享杯数据'  
                  },  
                  series : [
                    {
                      type:'bar',
                      data:[40,4,22],
                       //绘制平均线  
                      markLine : {  
                        data : [  
                          {type : 'average', name: '平均值'}  
                        ]  
                      },  
                      //绘制最高最低点  
                      markPoint : {  
                        data : [  
                          {type : 'max', name: '最大值'},  
                          {type : 'min', name: '最小值'}  
                        ]  
                      }  
                    }
                  ]
                },
                //2006年数据表
                {
                  title:{  
                    text:'2年后的后遗症状况',  
                    subtext:'共享杯数据'  
                  },  
                  series : [
                    {
                      type:'bar',
                      data:[40,3,25],
                       //绘制平均线  
                      markLine : {  
                        data : [  
                          {type : 'average', name: '平均值'}  
                        ]  
                      },  
                      //绘制最高最低点  
                      markPoint : {  
                        data : [  
                          {type : 'max', name: '最大值'},  
                          {type : 'min', name: '最小值'}  
                        ]  
                      }  
                    }
                  ]
                },
                {
                  title:{  
                    text:'3年后的后遗症状况',  
                    subtext:'共享杯数据'  
                  },  
                  series : [
                    {
                      type:'bar',
                      data:[48,2,20],
                       //绘制平均线  
                      markLine : {  
                        data : [  
                          {type : 'average', name: '平均值'}  
                        ]  
                      },  
                      //绘制最高最低点  
                      markPoint : {  
                        data : [  
                          {type : 'max', name: '最大值'},  
                          {type : 'min', name: '最小值'}  
                        ]  
                      }  
                    }
                  ]
                }
              ]  
            };        
            Iodine = {
                tooltip : {
                    trigger: 'item'
                },
                toolbox: {
                    show : true,
                    feature : {
                        mark : {show: true},
                        dataZoom : {show: true},
                        dataView : {show: true, readOnly: false},
                        restore : {show: true},
                        saveAsImage : {show: true}
                    }
                },
                dataRange: {
                    min: 0,
                    max: 10,
                    y: 'center',
                    text:['半衰期（天）'],           // 文本，默认为数值文本
                    color:['lightgreen','yellow'],
                    calculable : true
                },
                xAxis : [
                    {
                        type : 'value',
                        scale : true,
                        name : 'SPECT测算甲\n状腺重量（g）',
                        nameLocation : 'start'
                    }
                ],
                yAxis : [
                    {
                        type : 'value',
                        position:'right',
                        scale : true,
                        name : '摄碘率（%）'
                        
                    }
                ],
                animation: false,
                series : [
                    {
                        name:'scatter1',
                        type:'scatter',
                        symbolSize:5,
                        data:[[61.54,65.4,6],[88.39,84.4,6],[42.62,83.9,5],[37,78.4,3.1],[41,68,6],[46.76,63,5],[51.24,82,4.5],[36.9,76.7,6],[25.6,63.5,7],[35.6,76,4.8],[37.19,68.3,6],[31.72,59.8,6.7],[41.81,48,7],[50,66,5],[53.48,69.2,3],[64.35,83.8,6],[51.27,80.7,6],[57.74,70.6,5.5],[147.86,82.9,4],[28,79.3,6],[34.63,85.4,6],[62.68,53.2,6],[32.13,48.9,6],[54.31,88.4,5.1],[47.32,70,5],[33.29,70.4,5.1],[36.96,76.8,6],[28.14,42,6],[51.99,91.6,4.8],[26.99,63.8,4.7],[55.83,88.6,4.1],[79.84,83.7,6],[64.41,83.1,5.1],[37.5,70,4],[51,83.8,6],[58.3,43,7],[53.7,80,4.1],[53.5,88.9,6],[48.6,77.9,4.9],[29.16,66.2,6],[39.2,88.6,6],[37.6,79.2,4.1],[25.6,77.5,5.3],[29.3,47.8,5.5],[32.9,78.5,4.8],[60.6,75.3,4],[50.9,89.4,4.8],[77.7,64.5,5.5],[59.1,83.3,5],[95,90.1,4],[64.3,64.3,5.8],[35.4,41.9,6.4],[35,77.1,5.6],[28.9,63.8,5.4],[44.3,81.6,5.2],[32.9,76.2,5.3],[61,81.2,5.2],[37.84,78.4,6],[60,66.3,4.9],[38,62.7,5.8],[45,76.3,6],[43.4,80.9,5.3],[54.6,84,5],[40,81,4.5],[60,71.1,5],[52,63,6],[75.1,87.8,4],[58.7,81.6,3],[104.6,81.7,3],[41.3,61.6,6.1],[69,82.4,4],[56.4,80.9,4.4],[52.1,88.7,5.2],[30,63.4,7],[44.6,65.7,6.2],[48.4,81.2,5],[58.3,43.5,7],[40,77.1,5.8],[58.1,86.1,6],[94.2,93.7,4],[109,81,4],[41.2,83.9,6],[40,73.8,5.2],[28,62,6.3],[68,68,2],[27.1,78,5.5],[18.4,52,6],[42.5,91,5],[37,73,5.2],[91.4,91,5.4],[71.9,51.4,6.3],[23.5,67,7],[48,77,5],[37,81,6],[41,59,6.1],[32,79,6],[50,91,3],[42,62.9,6],[26,58,7],[71,86,6]]
                    }
                ]
            };
            genderChart.setOption(Gender); 
            ageChartPie.setOption(AgePie);
            ageChartLine.setOption(AgeLine);
            ill.setOption(Ill);
            thyroidTreat.setOption(ThyroidTreat);
            operation.setOption(Operation);
            familyHistory.setOption(FamilyHistory);
            recovery.setOption(Recovery);
            sequela.setOption(Sequela);
            iodine.setOption(Iodine);
            }
        );



           
     









