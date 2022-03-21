import http from './http.service'
import { AxiosResponse } from 'axios'

class SalesDataService {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async getSales(): Promise<AxiosResponse<any, any>> {
    return await http.get('http://localhost:3004/sales')
  }
}

export default new SalesDataService()
