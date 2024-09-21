import { createRouter, createWebHistory } from 'vue-router'
import ProjectView from "@/views/ProjectView.vue";

export const router = createRouter( {
  history: createWebHistory(),
  routes: [
    {
      path: '/project-view',
      name: 'project-view',
      component: ProjectView
    }
  ]
})

