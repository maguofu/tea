

const baseUrl = 'https://127.0.0.1:70';
export default (api, data) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseUrl + api,
      data: data.params,
      header: data.header
        || {
          "Content-Type": "application/x-www-form-urlencoded",
          "usertoken": wx.getStorageSync("usertoken")
        },
      method: data.method || "GET",
      success: (res) => {
        resolve(res);
      },
      fail: (e) => {
        reject(e);
      },
      complete: () => {

      }
    })
  })
}