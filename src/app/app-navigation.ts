export const navigation = [
  // {
  //   text: 'Home',
  //   path: '/home',
  //   icon: 'home'
  // },
  // {
  //   text: 'Examples',
  //   icon: 'folder',
  //   items: [
  //     {
  //       text: 'Profile',
  //       path: '/profile'
  //     },
  //     {
  //       text: 'Tasks',
  //       path: '/tasks'
  //     }
  //   ]
  // },
  {
    text: '应急决策',
    path: '/pages/emergency-plan-home',
    icon: 'home',
    items: [
      {
        text: '水库基本信息',
        path: '/pages/emergency-plan/reservoir-info',
      },
      {
        text: '应急原则及依据',
        path: '/pages/emergency-plan/principal-and-basis',
      },
      {
        text: '超标准事件分级标准',
        path: '/pages/emergency-plan/super-standard-grading',
      },
    ]
  },
  {
    text: '工程信息',
    path: '/pages/basic-info-page',
    icon: 'info',
    items: [
      {
        text: '流域概况',
        path: '/pages/basic-info/overview',
      },
      {
        text: '工程概况',
        path: '/basic-info/project-overview',
      },
      {
        text: '工程特性表',
        path: '/pages/basic-info/project-properties',
      },
      {
        text: '工程图表',
        path: '/pages/basic-info/engineering-chart',
      },
    ]
  },
  {
    text: '运行管理',
    path: '/pages/person-info-page',
    icon: 'group',
    items: [
      {
        text: '水库管理人员',
        path: '/pages/person-info/reservoir-manager',
      },
      {
        text: '应急管理人员',
        path: '/pages/person-info/emergency-person',
      },
    ]
  },
  {
    text: '监测和预警',
    path: '/pages/monitoring-and-warning',
    icon: 'airplane'
  },
  {
    text: '超标准洪水分析',
    icon: 'runner',
    items: [
      {
        text: '工程现状',
        path: '/pages/exceeding-standard-flood/safety-appraisal-status',
      },
      {
        text: '漫顶溃坝',
        path: '/pages/exceeding-standard-flood/overtop-dam-break',
      },
    ]
  },
  // {
  //   text: '突发事件分析',
  //   path: '/pages/critical-incident-analysis',
  //   icon: 'runner'
  // },
  // {
  //   text: 'Emergnecy Organization Home',
  //   path: '/pages/emergency-organization-home',
  //   icon: 'folder'
  // },
  {
    text: '应急管理',
    path: '/pages/emergency-organization-home',
    icon: 'key',
    items: [
      {
        text: '应急组织框图',
        path: '/pages/emergency-organization/emergency-diagram',
      },
      {
        text: '应急指挥部',
        path: '/pages/emergency-organization/headquarters',
        items:[
          {
            text: '办公室',
            path: '/pages/emergency-organization/office',
          },
          {
            text: '指挥机构',
            path: '/pages/emergency-organization/command-agency',
          },
          {
            text: '保障机构',
            path: '/pages/emergency-organization/guarantee-agency',
          },
          {
            text: '专家组',
            path: '/pages/emergency-diagram/experts',
          },
          {
            text: '抢险和救援',
            path: '/pages/emergency-organization/rescue',
          },
        ]
      },
      {
        text:'应急响应',
        // icon: 'menu',
        items:[
          {
            text: '应急流程',
            path: '/pages/emergency-organization/process',
          },
          {
            text: '信息上报',
            path: '/pages/emergency-organization/info-report',
          },
          {
            text: '分级响应',
            path: '/pages/emergency-organization/grade',
          },
        ]
      },
      {
        text:'应急保障',
        // icon: 'menu',
        items:[
          {
            text:'物资',
            path: '/pages/emergency-organization/supplies',
          },
          {
            text:'相关联系方式',
            path: '/pages/emergency-organization/contacts',
          }
        ]
      }
    ]
  },
  // {
  //   text: '应急管理页',
  //   path: '/pages/emergency-management-page',
  //   icon: 'warning'
  // },
  // {
  //   text: '监测和预警',
  //   path: '/pages/monitoring-and-warning',
  //   icon: 'airplane'
  // },
  // {
  //   text: '突发事件分析',
  //   path: '/pages/critical-incident-analysis',
  //   icon: 'runner'
  // },
  {
    text: '后台管理',
    icon: 'tableproperties',
    items: [
      // {
      //   text: '应急预案信息填报表',
      //   path: '/pages/forms/emergency-plan-form',
      // },
      {
        text: '水库基本信息',
        path: '/pages/forms/reservoir-info-form',
      },
      {
        text: '水库详细信息',
        path: '/pages/forms/reservoir-detail-form',
      },
      {
        text: '水库特性表',
        path: '/pages/forms/project-props-form',
      },
      {
        text: '防汛责任人',
        path: '/pages/forms/flood-resp-person',
      },
      {
        text: '应急管理人员',
        path: '/pages/forms/emergency-manager-form',
      },
      {
        text: '应急组织',
        path: '/pages/form/emergency-org-form',
      },
      {
        text: '图集',
        path: '/pages/forms/atlas-form',
      },
      {
        text: '使用权限',
        path: '/pages/forms/authority-form',
      },
      {
        text: '下游保护村庄',
        path: '/pages/forms/downstream-village-form',
      },
      {
        text: '应急指挥部中的职责',
        path: '/pages/forms/duty-form',
      },
      {
        text: '撤离路线信息',
        path: '/pages/forms/evacuation-info-form',
      },
      {
        text: '人员信息表',
        path: '/pages/forms/person-info-form',
      },
      {
        text: '安置点信息',
        path: '/pages/forms/settlement-form',
      },
      {
        text: '物资存储',
        path: '/pages/forms/supplies-storage-form',
      },
    ]
  },







];
