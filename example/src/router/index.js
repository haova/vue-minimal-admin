import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', redirect: '/auth/signin' },
    {
      path: '/auth',
      component: () => import('../layouts/RAuthLayout.vue'),
      children: [
        { path: '', redirect: '/auth/signin' },
        {
          path: 'signin',
          component: () => import('../views/auth/SignInView.vue'),
        },
        {
          path: 'signout',
          redirect: '/auth/signin',
        },
      ],
    },
    {
      path: '/dashboard',
      component: () => import('../layouts/RDashboardLayout.vue'),
      children: [
        {
          path: '',
          name: 'Introduction',
          component: () => import('../views/dashboard/IntroductionView.vue'),
        },
        {
          path: 'button',
          name: 'Button',
          component: () => import('../views/dashboard/ButtonView.vue'),
        },
        {
          path: 'checkbox',
          name: 'Checkbox',
          component: () => import('../views/dashboard/CheckboxView.vue'),
        },
        {
          path: 'dialog',
          name: 'Dialog',
          component: () => import('../views/dashboard/DialogView.vue'),
        },
        {
          path: 'dropdown',
          name: 'Dropdown',
          component: () => import('../views/dashboard/DropdownView.vue'),
        },
        {
          path: 'tree',
          name: 'Tree',
          component: () => import('../views/dashboard/TreeView.vue'),
        },
        {
          path: 'heading',
          name: 'Heading',
          component: () => import('../views/dashboard/HeadingView.vue'),
        },
        {
          path: 'input',
          name: 'Input',
          component: () => import('../views/dashboard/InputView.vue'),
        },
        {
          path: 'icon',
          name: 'Icon',
          component: () => import('../views/dashboard/IconView.vue'),
        },
        {
          path: 'notification',
          name: 'Notification',
          component: () => import('../views/dashboard/NotificationView.vue'),
        },
        {
          path: 'rich-editor',
          name: 'RichEditor',
          component: () => import('../views/dashboard/RichEditorView.vue'),
        },
        {
          path: 'others',
          name: 'Others',
          component: () => import('../views/dashboard/OtherView.vue'),
        },
      ],
    },
  ],
});

export default router;
