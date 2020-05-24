Page({

  /**
   * 页面的初始数据
   */
  data: {
    //被点击的首页导航的菜单索引
    currentIndexNav:0,

    //首页导航数据
    navList:[],
    //轮播图数据
    swiperList:[],
    //视频列表数据
    videosList:[]
  },

//点击首页导航按钮
activeNav(e){
  // console.log(e)
    this.setData({
      currentIndexNav:e.target.dataset.index
    })
},

// 获取首页导航数据
  getNavList(){
      //
      let that = this
      wx.request({
        url: 'http://mock-api.com/mnEe4VnJ.mock/navList',
        
        success: (result)=>{
          // console.log(result)
          if(result.data.code===0){
            that.setData({
              navList:result.data.data.navList
            })
          }
        },
        
      });
  },
/**
 * 获取轮播图数据
 */
getSwiperList(){
  let that = this;
 wx.request({
  url: 'http://mock-api.com/mnEe4VnJ.mock/swiperList',
  data: {},
  header: {'content-type':'application/json'},
  method: 'GET',
  dataType: 'json',
  responseType: 'text',
  success: (result)=>{
    if(result.data.code===0){
      that.setData({
        swiperList:result.data.data.swiperList
      })
      
      console.log("获取到了轮播图")
    }
  },
  fail: ()=>{},
  complete: ()=>{}
});
},


getVideosList(){
  let that = this;
wx.request({
    url: 'http://mock-api.com/mnEe4VnJ.mock/videoList',
    data: {},
    header: {'content-type':'application/json'},
    method: 'GET',
    dataType: 'json',
    responseType: 'text',
    success: (result)=>{
      if(result.data.code===0){
          that.setData({
            videosList:result.data.data.videoList
          })
          console.log(111)
      }
    },
    fail: ()=>{},
    complete: ()=>{}
  });
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取首页导航数据
    this.getNavList();
    this.getSwiperList();
    this.getVideosList();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})