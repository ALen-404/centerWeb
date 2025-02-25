import { del, get, patch, post } from './base'
import type { App, AppCategory } from '@/models/explore'

export const fetchAppList = () => {
  return get<{
    categories: AppCategory[]
    recommended_apps: App[]
  }>('/explore/apps')
}

export const fetchNoAuthAppList = () => {
  return get<{
    categories: AppCategory[]
    recommended_apps: App[]
  }>('/apps/no_auth')
}

export const fetchAppDetail = (id: string): Promise<any> => {
  return get(`/explore/apps/${id}`)
}

export const fetchInstalledAppList = () => {
  return get('/installed-apps')
}

export const installApp = (id: string) => {
  return post('/installed-apps', {
    body: {
      app_id: id,
    },
  })
}

export const uninstallApp = (id: string) => {
  return del(`/installed-apps/${id}`)
}

export const updatePinStatus = (id: string, isPinned: boolean) => {
  return patch(`/installed-apps/${id}`, {
    body: {
      is_pinned: isPinned,
    },
  })
}

export const getToolProviders = () => {
  return get('/workspaces/current/tool-providers')
}
