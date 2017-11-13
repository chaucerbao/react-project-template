// Libraries
import { getEnv, types } from 'mobx-state-tree'

// Individual stores
import PostStore from './post-store'
import UserStore from './user-store'
import ViewStore from './view-store'

// Combined stores
const Stores = types
  .model('Stores', {
    postStore: types.optional(PostStore, {
      _cache: {},
      list: []
    }),
    userStore: types.optional(UserStore, {
      _cache: {}
    }),
    viewStore: types.optional(ViewStore, {
      page: {
        name: '',
        params: {}
      }
    })
  })
  .views(self => ({
    get api() {
      return getEnv(self).api
    },
    get routes() {
      return getEnv(self).routes
    }
  }))
  .actions(self => ({
    afterCreate() {
      self.viewStore.goTo(getEnv(self).path)
    }
  }))

// Exports
export default Stores

export type IStores = typeof Stores.Type
