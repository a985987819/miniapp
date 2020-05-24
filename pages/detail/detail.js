// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoInfo:null,
    othersList:[],
    commentData:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    console.log(options)
    let videoId = options.id;
    this.getCurrentVideo(videoId);
    this.getOthersList(videoId);
    this.getCommentList(videoId);
  },
  /**
   * 根据视频的ID获取视频详情
   */

   getCurrentVideo(videoId){
     let that = this
     wx.request({
       url: 'http://mock-api.com/mnEe4VnJ.mock/videoDetail?id='+videoId,
       data: {},
       header: {'content-type':'application/json'},
       method: 'GET',
       dataType: 'json',
       responseType: 'text',
       success: (result)=>{
         if(result.data.code===0){
           that.setData({
             videoInfo:result.data.data.videoInfo
           })
         }
       },
       fail: ()=>{},
       complete: ()=>{}
     });
   },
/**
 * 获取推荐视频
 */
   getOthersList(videoId){
     let that = this
wx.request({
  url: 'http://mock-api.com/mnEe4VnJ.mock/otherList?id='+videoId,
  data: {},
  header: {'content-type':'application/json'},
  method: 'GET',
  dataType: 'json',
  responseType: 'text',
  success: (result)=>{
    if(result.data.code===0){
      that.setData({
        othersList:result.data.data.otherList
      })
    }
    // console.log(result)
  },
  fail: ()=>{},
  complete: ()=>{}
});
   },
/**
 * 获取评论数据
 */
   getCommentList(videoId){
     let that = this
wx.request({
  url: 'http://mock-api.com/mnEe4VnJ.mock/commentList?id='+videoId,
  data: {},
  header: {'content-type':'application/json'},
  method: 'GET',
  dataType: 'json',
  responseType: 'text',
  success: (result)=>{
    if(result.data.code===0){
      that.setData({
        commentData:result.data.data.commentData
      })
    }
  },
  fail: ()=>{},
  complete: ()=>{}
});
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