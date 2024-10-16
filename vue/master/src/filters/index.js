import { parseTime } from '@/utils/tools'

/**
 * 格式化时间
 * @param time {string} 需要格式化的时间
 * @param cFormat {string} 时间格式
 * @return {string} 格式化后的时间
 * @author TJ 2017/07/21
 * @example 略
 */
export function parseTimeFilter(time, cFormat) {
  return parseTime(time, cFormat)
}

/**
 * 把数组转换成字符串
 * @param data {array} 需要转换的数组
 * @return {string}
 * @author TJ 2017/08/3
 * @example 略
 */
export function array2String(data, separator) {
  separator = separator || ','
  if (Array.isArray(data)) {
    return data.join(separator)
  }
}

/**
 * 解析数据
 * @param data {string} 数据
 * @param row {obj} 行数据
 * @return {string} 格式化后的时间
 * @author TJ 2017/07/21
 * @example 略
 */
export function parseDateFilter(data, row) {
  // 日期类型格式化
  if (data && (row.opts.type === 'date' || row.opts.type === 'datetime') && row.format) {
    return parseTime(data, row.format)
  }
  return data
}

/**
 * 过滤空字段数据
 * @param data {string} 数据
 * @param row {obj} 行数据
 * @return {string} 格式化后的时间
 * @author TJ 2017/07/21
 * @example 略
 */
export function emptyDataFilter(data, row) {
  // 处理0的场景
  if (data === 0 || data === '0') {
    return data
  }
  // 处理空数据
  if (!data && !row.icon) {
    return '-- -- -- --'
  }
  return data
}
