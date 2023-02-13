import { topCategory } from '@/apis/constants'
import { findAllCategory } from '@/apis/category'

export default {
  namespaced: true,
  state () {
    return {
      list: topCategory.map(item => ({ name: item }))
    }
  },
  mutations: {
    setList (state, payload) {
      state.list = payload
    },
    // 控制当前分类二级分类显示和隐藏
    show (state, id) {
      const currentCategory = state.list.find(item => item.id === id)
      currentCategory.open = true
    },
    hide (state, id) {
      const currentCategory = state.list.find(item => item.id === id)
      currentCategory.open = true
    }
  },
  actions: {
    async getList ({ commit }) {
      const data = await findAllCategory()
      data.result.forEach(top => {
        top.open = false
      })
      commit('setList', data.result)
    }
  }
}
