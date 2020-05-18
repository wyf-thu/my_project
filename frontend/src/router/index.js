import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TopNav from '@/components/final_topNav.vue'
import LeftNav from '@/components/final_leftNav.vue'
import Home from '@/views/home.vue'
import Dashboard from '@/views/workbench/dashboard.vue'
import MySettings from '@/views/workbench/mySettings.vue'
import Mission from '@/views/workbench/mission/mission.vue'
import Plan from '@/views/workbench/plan/plan.vue'
import Maillist from '@/views/workbench/maillist.vue'
import EnterpriseList from '@/views/enterprise/index.vue'
import EnterpriseAdd from '@/views/enterprise/add.vue'
import EnterpriseDetail from '@/views/enterprise/detail.vue'
import EnterpriseValidate from '@/views/enterprise/validate.vue'
import VehicleManage from '@/views/vehicle/index.vue'
import DeptManager from '@/views/dept/index.vue'
import NotFound from '@/components/404.vue'
import classes from '@/components/eleclasses.vue'
import elemsglist from '@/components/elemsglist.vue'
import elefilelist from '@/components/elefilelist.vue'
import elegroup from '@/components/elegroup.vue'

Vue.use(Router)
const Login = resolve => require(['@/views/login'], resolve)



let router = new Router({
  routes: [
    {
      path: '/login',
      type: 'login',
      component: Login
    },
    {
      path: '*',
      component: NotFound
    },
    {
      path: '/',
      type: 'home',
      name: 'home',
      redirect: '/classes',
      component: Home,
      children: [
        {
          path: '/classes',
          name: '课程列表',
          components: {
            default: classes,
            top: TopNav,
            //aside: LeftNav
          },
          leaf: true, // 只有一个节点
          iconCls: 'iconfont icon-home', // 图标样式class
          menuShow: true
        }
      ]
    },
    {
      path: '/classlist',
      type: 'classlist',
      name: 'classlist',
      component: Home,
      redirect: '/classlist/msglist',
      menuShow: true,
      children: [
        {
          path: '/classlist/msglist',
          name: '课程公告',
          components: {
            default: elemsglist,
            top: TopNav,
            aside: LeftNav
          },
          leaf: true,
          iconCls: 'el-icon-menu',
          menuShow: true
        },
        {
          path: '/classlist/filelist',
          name: '课程文件',
          components: {
            default: elefilelist,
            top: TopNav,
            aside: LeftNav
          },
          leaf: true,
          iconCls: 'el-icon-folder',
          menuShow: true
        },
        {
          path: '/classlist/group',
          name: '课程成员',
          components: {
            default: elegroup,
            top: TopNav,
            aside: LeftNav
          },
          leaf: true,
          iconCls: 'el-icon-user',
          menuShow: true
        }
      ]
    }
  ],
  mode: "history"
});

/*
router.beforeEach((to, from, next) => {
  // console.log('to:' + to.path)
  if (to.path.startsWith('/login')) {
    window.localStorage.removeItem('access-user')
    next()
  } else {
    let user = JSON.parse(window.localStorage.getItem('access-user'))
    if (!user) {
      next({path: '/login'})
    } else {
      next()
    }
  }
});
*/
export default router
