// 定义分类相关API接口函数
import request from '@/utils/request'

export const findAllCategory = () => {
  return request('/home/category/head', 'get')
}

/**
 *  获取顶级类目信息
 * @param {String} id -顶级类目
 * @returns
 */
export const findTopCategory = (id) => {
  return request('/category', 'get', { id })
}

/**
 *  获取二级类目筛选数据
 * @param {String} id -二级类目
 * @returns
 */
export const findSubCategoryFilter = (id) => {
  return request('/category/sub/filter', 'get', { id })
}
