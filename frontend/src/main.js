// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import Mint from 'mint-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import * as stores from './store'
import { Keys } from './uitls'
import { getCxt } from './services-client'

Vue.config.productionTip = false
let initRoomInfo = Keys.SETROOMINFO
Vue.use(ElementUI)
Vue.use(Mint)

function toEmotion(text, isNoGif){
    var list = ['微笑', '撇嘴', '色', '发呆', '得意', '流泪', '害羞', '闭嘴', '睡', '大哭', '尴尬', '发怒', '调皮', '呲牙', '惊讶', '难过', '酷', '冷汗', '抓狂', '吐', '偷笑', '愉快', '白眼', '傲慢', '饥饿', '困', '惊恐', '流汗', '憨笑', '大兵', '奋斗', '咒骂', '疑问', '嘘', '晕', '折磨', '衰', '骷髅', '敲打', '再见', '擦汗', '抠鼻', '鼓掌', '糗大了', '坏笑', '左哼哼', '右哼哼', '哈欠', '鄙视', '委屈', '快哭了', '阴险', '亲亲', '吓', '可怜', '菜刀', '西瓜', '啤酒', '篮球', '乒乓', '咖啡', '饭', '猪头', '玫瑰', '凋谢', '示爱', '爱心', '心碎', '蛋糕', '闪电', '炸弹', '刀', '足球', '瓢虫', '便便', '月亮', '太阳', '礼物', '拥抱', '强', '弱', '握手', '胜利', '抱拳', '勾引', '拳头', '差劲', '爱你', 'NO', 'OK', '爱情', '飞吻', '跳跳', '发抖', '怄火', '转圈', '磕头', '回头', '跳绳', '挥手', '激动', '街舞', '献吻', '左太极', '右太极', '嘿哈', '捂脸', '奸笑', '机智', '皱眉', '耶', '红包', '鸡'];

    return text;
    if (!text) {
        return text;
    }

    text = text.replace(/\[[\u4E00-\u9FA5]{1,3}\]/gi, function(word){
        var newWord = word.replace(/\[|\]/gi,'');
        var index = list.indexOf(newWord);
        var backgroundPositionX = -index * 24
        var imgHTML = '';
        if(index<0){
            return word;
        }

        if (isNoGif) {
            if(index>104){
                return word;
            }
            imgHTML = `<i class="static-emotion" style="background:url(https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/default218877.gif) ${backgroundPositionX}px 0;"></i>`
        } else {
            var path = index>104 ? '/img' : 'https://res.wx.qq.com/mpres/htmledition/images/icon';
            imgHTML = `<img class="static-emotion-gif" style="vertical-align: middle" src="${path}/emotion/${index}.gif">`
        }
        return imgHTML;
    });
    return text;
}


Vue.directive('emotion', {
    bind: function (el, binding) {
        el.innerHTML = toEmotion(binding.value)
    }
});


/* eslint-disable no-new */
new Vue({
  store: stores.default,
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App),
  created: function () {
    let self = this
    getCxt().createIo(this, function (roomInfo) {
      stores.busCxt.init() /** 初始化view与service层的交互层(业务层) */
      self.$store.dispatch(initRoomInfo, roomInfo)
      getCxt().refUsers(function (users) {
        stores.busCxt.userCxt.refUsers(users)
      })
    })
  }
})
