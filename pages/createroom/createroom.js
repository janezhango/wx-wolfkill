//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    dataList:[
      //红方
      {
          "id":"1",
          "pic": "./images/Red1.jpg",
          "title": "cunmin",
          "currentNum":0,
          "addclass":"itemroom-add",
          "reduceclass":"itemroom-reduce itemroom-no",
          "max":6,
          "name": "红方"
      },
      //蓝方
      {
          "id":"2",
          "pic": "./images/Blue1.jpg",
          "title": "nvwu",
          "currentNum":0,
          "addclass":"itemroom-add",
          "reduceclass":"itemroom-reduce itemroom-no",
          "max":1,
          "name": "蓝方"
      },
      //投票轮数
      {
          "id":"3",
          "pic": "./images/lieren.png",
          "title": "lieren",
          "currentNum":0,
          "addclass":"itemroom-add",
          "reduceclass":"itemroom-reduce itemroom-no",
          "max":1,
          "name": "投票轮数"
      },
      
    ],
    total:0
  },
  addnum: function(e){
    let currId = e.currentTarget.dataset.id;
    let max = e.currentTarget.dataset.max;
    let array = this.data.dataList;
    let totalNum = this.data.total;
    for(let i = 0;i<array.length;i++){
      if(array[i]['id']==currId){
        if(array[i]['currentNum'] >= (max-1)){
            array[i]['addclass'] = "itemroom-add itemroom-no";
            if(array[i]['currentNum'] == (max-1)){
                console.log(1);
                totalNum += 1;
            }
            array[i]['currentNum'] = max;
        }else{
            array[i]['addclass'] = "itemroom-add";
            array[i]['currentNum'] += 1;
            totalNum += 1;
        }
        array[i]['reduceclass'] = "itemroom-reduce";
        this.setData({
          dataList:array,
          total:totalNum
        });
        break;
      }
    }
  },
  reducenum: function(e){
    let currId = e.currentTarget.dataset.id;
    let array = this.data.dataList;
    let totalNum = this.data.total;
    for(let i = 0;i<array.length;i++){
      if(array[i]['id']==currId){
        
        if(array[i]['currentNum'] <= 1){
            array[i]['reduceclass'] = "itemroom-reduce itemroom-no";
            if(array[i]['currentNum'] == 1){
                totalNum -= 1;
            }
            array[i]['currentNum'] = 0;
        }else{
            array[i]['reduceclass'] = "itemroom-reduce";
            array[i]['currentNum'] -= 1;
            totalNum -= 1;
        }
        array[i]['addclass'] = "itemroom-add";
        this.setData({
          dataList:array,
          total:totalNum
        });
        break;
      }
    }
  },
  onLoad: function () {
    
  },
  goToPlay: function(){
      wx.navigateTo({
      url: '/pages/room/room',
      success: function(res){
        
      },
      fail: function() {
        
      },
      complete: function() {
        
      }
    })
  }
})
