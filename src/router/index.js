import Vue from 'vue'
import Router from 'vue-router'
import store from "../store/index";

import home from '../components/home'
import recommendation from '../components/recommendation.vue'
import collaborate from '../components/Collaborate.vue'
import virtualTryon from '../components/VirtualTryon.vue'
import design from '../components/design.vue';
import designRender from '../components/design/designRender.vue';
import designRecommend from '../components/design/designRecommend.vue';
import aboutUs from '../components/aboutus.vue';
import login from '../components/login.vue';

import process from '../components/collaborate/process.vue';
import collaborateMain from '../components/collaborate/main.vue'
import fabricDemo from "../components/collaborate/fabricDemo";

import fabricDemoDouble from "../components/collaborate/fabricDemo-double";

import match from '../components/design/match.vue'

import personalInfo from "../components/personalInfo";

import admin from "../components/admin"
import adminLogin from "../components/admin/login";
import recManager from "../components/admin/recommendation"
import materialManager from "../components/admin/recommendation/material/materialManager"
import materialEdit from "../components/admin/recommendation/material/materialEdit"
import materialTable from "../components/admin/recommendation/material/materialTable"
import materialDeletedItems from "../components/admin/recommendation/material/materialDeletedItems"
import materialResult from "../components/admin/recommendation/material/materialResult"

import brandManager from "../components/admin/recommendation/brand/brandManager"
import brandEdit from "../components/admin/recommendation/brand/brandEdit"
import brandTable from "../components/admin/recommendation/brand/brandTable"
import brandDeletedItems from "../components/admin/recommendation/brand/brandDeletedItems"

import categoryManager from "../components/admin/recommendation/category/categoryManager"
import categoryEdit from "../components/admin/recommendation/category/categoryEdit"
import categoryTable from "../components/admin/recommendation/category/categoryTable"
import categoryDeletedItems from "../components/admin/recommendation/category/categoryDeletedItems"

import suitManager from "../components/admin/recommendation/suit/suitManager"
import suitTable from "../components/admin/recommendation/suit/suitTable"
import suitEdit from "../components/admin/recommendation/suit/suitEdit"

import materialList from "../components/recommendation/materialList"
import categoryList from "../components/recommendation/categoryList"
import recMaterialList from "../components/recommendation/recMaterialList"
import recMenu from "../components/recommendation/recMenu"
import share from "../components/share";
import innerPage from "../components/personal/innerPage";
import testCover from "../components/testCover";
import stylist from "../components/stylist";
import singleLogin from '../components/singleLogin.vue'
Vue.use(Router)

const routes = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home',
      name: 'root',
    },
    {
      name: 'home',
      path: '/home',
      component: home
    },

    //????????????
    {
      path: '/singleLogin',
      name: 'singleLogin',
      component: singleLogin,
    },

    {
      path: '/share',
      name: 'share',
      component: share,
      children: []
    },
    {
      path: '/share-inner',
      name: 'share-inner',
      component: innerPage,
      meta: {
        isChild: ['share', 'personalInfo','share-space']
      }
    },
    {
      path: '/share-space',
      name: "share-space",
      component: personalInfo
    },
    {
      path: '/recommendation',
      name: 'recommendation',
      component: recommendation,
      meta: {
        requireAuth: true,
        nextPage: 'categoryList',
      },
      children: [{
          path: 'category-list',
          name: 'categoryList',
          component: categoryList,
          meta: {
            requireAuth: true,
          }
        },
        {
          path: 'material-list',
          name: 'materialList',
          component: materialList,
          meta: {
            requireAuth: true,
          },
        },
        {
          path: 'rec-menu',
          name: 'recMenu',
          component: recMenu,
          meta: {
            requireAuth: true,
            keepAlive: true,
          }
        },
        {
          path: 'rec-material-list',
          name: 'recMaterialList',
          component: recMaterialList,
          meta: {
            requireAuth: true,
          },
        },
      ]
    },
    {
      path: '/collaborate',
      name: 'collaborate',
      component: collaborate,
      meta: {
          requireAuth: true, //???????????????????????????????????????
          // nextPage: 'collaborate-main'
      },
      children: [
        //collaborate ???????????????
        {
          path: 'collaborate-main',
          name: 'collaborate-main',
          component: collaborateMain,
          meta: {
            requireAuth: true, //???????????????????????????????????????
          },
        },
        {
          path: 'collaborate-process',
          name: 'collaborate-process',
          component: process,
          meta: {
            requireAuth: true, //???????????????????????????????????????
            isChild: ['collaborate-main']
          },
        },
        {
          path: 'collaborate-design',
          name: 'collaborate-design',
          // component: fabricDemo,
          component: fabricDemoDouble,
          meta: {
            requireAuth: true, //???????????????????????????????????????
            isChild: ['collaborate-process', 'collaborate-main']
          },
        }
      ]
    },
    {
      path: '/virtual-tryon',
      name: 'virtual try-on',
      component: virtualTryon
    },
    {
      path: '/design',
      name: "design",
      component: design,
      children: [{
          path: 'match',
          name: "match",
          component: match
        },
        {
          path: 'render',
          name: 'render',
          component: designRender
        },
        {
          path: 'recommend',
          name: 'recommend',
          component: designRecommend
        },
      ]
    },

    {
      path: '/aboutus',
      name: 'aboutus',
      component: aboutUs
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/personalInfo',
      name: 'personalInfo',
      component: personalInfo,
    },
    {
      path: '/stylist',
      name: 'stylist',
      component: stylist
    },
    {
      path: '/cover',
      name: 'cover',
      component: testCover
    },
    // ????????????
    // ??????????????????
    {
      path: '/admin/login',
      name: 'adminLogin',
      component: adminLogin,
      meta: {
        isAdmin: true,
      }
    },
    {
      path: '/admin',
      name: 'admin',
      component: admin,
      meta: {
        nextPage: 'recManager',
        title: '??????',
        breadcrumb: true,
        isAdmin: true,
      },
      children: [{
        path: 'recommendation', // ???????????????
        name: 'recManager',
        component: recManager,
        meta: {
          requireAdminAuth: true,
          title: '????????????',
          breadcrumb: true,
          isAdmin: true,
        },
        children: [{
          path: 'material',
          name: 'materialManager',
          component: materialManager,
          meta: {
            requireAdminAuth: true,
            nextPage: 'materialTable',
            title: '????????????',
            breadcrumb: true,
            isAdmin: true,
          },
          children: [{
              path: 'list',
              name: 'materialTable',
              component: materialTable,
              meta: {
                requireAdminAuth: true,
                title: '????????????',
                breadcrumb: true,
                isAdmin: true,
              }
            }, {
              path: 'edit',
              name: 'materialEdit',
              component: materialEdit,
              meta: {
                requireAdminAuth: true,
                title: '??????',
                breadcrumb: true,
                isAdmin: true,
              }
            },
            {
              path: 'result',
              name: 'materialResult',
              component: materialResult,
              meta: {
                requireAdminAuth: true,
                title: '?????????',
                breadcrumb: true,
                isAdmin: true,
              }
            },
            {
              path: 'deleted-items',
              name: 'materialDeletedItems',
              component: materialDeletedItems,
              meta: {
                requireAdminAuth: true,
                title: '?????????',
                breadcrumb: true,
                isAdmin: true,
              }
            }
          ]
        }, {
          path: 'brand',
          name: 'brandManager',
          component: brandManager,
          meta: {
            requireAdminAuth: true,
            nextPage: 'brandTable',
            title: '????????????',
            breadcrumb: true,
            isAdmin: true,
          },
          children: [{
            path: 'list',
            name: 'brandTable',
            component: brandTable,
            meta: {
              requireAdminAuth: true,
              title: '????????????',
              breadcrumb: true,
              isAdmin: true,
            }
          }, {
            path: 'edit',
            name: 'brandEdit',
            component: brandEdit,
            meta: {
              requireAdminAuth: true,
              title: '??????',
              breadcrumb: true,
              isAdmin: true,
            }
          }, {
            path: 'deleted-items',
            name: 'brandDeletedItems',
            component: brandDeletedItems,
            meta: {
              requireAdminAuth: true,
              title: '?????????',
              breadcrumb: true,
              isAdmin: true,
            }
          }]
        }, {
          path: 'category',
          name: 'categoryManager',
          component: categoryManager,
          meta: {
            requireAdminAuth: true,
            nextPage: 'categoryTable',
            title: '????????????',
            breadcrumb: true,
            isAdmin: true,
          },
          children: [{
            path: 'list',
            name: 'categoryTable',
            component: categoryTable,
            meta: {
              requireAdminAuth: true,
              title: '????????????',
              breadcrumb: true,
              isAdmin: true,
            }
          }, {
            path: 'edit',
            name: 'categoryEdit',
            component: categoryEdit,
            meta: {
              requireAdminAuth: true,
              title: '??????',
              breadcrumb: true,
              isAdmin: true,
            }
          }, {
            path: 'deleted-items',
            name: 'categoryDeletedItems',
            component: categoryDeletedItems,
            meta: {
              requireAdminAuth: true,
              title: '?????????',
              breadcrumb: true,
              isAdmin: true,
            }
          }]
        }, {
          path: 'suit',
          name: 'suitManager',
          component: suitManager,
          meta: {
            requireAdminAuth: true,
            nextPage: 'suitTable',
            title: '????????????',
            breadcrumb: true,
            isAdmin: true,
          },
          children: [{
            path: 'list',
            name: 'suitTable',
            component: suitTable,
            meta: {
              requireAdminAuth: true,
              title: '????????????',
              breadcrumb: true,
              isAdmin: true,
            }
          }, {
            path: 'edit',
            name: 'suitEdit',
            component: suitEdit,
            meta: {
              requireAdminAuth: true,
              title: '??????',
              breadcrumb: true,
              isAdmin: true,
            }
          }, ]
        }]
      }, ]
    }


  ]
})

routes.beforeEach((to, from, next) => {
  /**?????????????????? */
  if ((to.meta.requireAdminAuth) && (store.state.adminPhone == null)) {
    next({
      name: 'adminLogin',
      query: {
        redirect: to.fullPath,
      }
    })
  }
  console.log("before", from);
  if ((to.meta.requireAuth) && (store.state.phone == null)) {
    console.log("before Each login", to.fullPath)
    next({
      path: '/login',
      query: {
        redirect: to.fullPath
      }
    })
  } else if (to.meta.nextPage != null) {
    next({
      name: to.meta.nextPage
    })
  } else if (to.meta.isChild != null) {
    var list = to.meta.isChild;
    for (var i = 0; i < list.length; i++) {
      if (from.name == list[i]) {
        next();
        return;
      }
    }
    next({
      name: list[0]
    })
  } else {
    next();
  }
});

const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}


export default routes;
