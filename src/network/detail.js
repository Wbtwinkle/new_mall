import {request} from "./request";

export function getDetail(id) {
  return request({
    url: '/blogs',
    params: {
      id
    }
  })
}