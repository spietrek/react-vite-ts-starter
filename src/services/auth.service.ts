/* eslint-disable @typescript-eslint/no-explicit-any */
import http from './http.service'
import { AxiosResponse } from 'axios'

interface UserProps {
  userName: string
  email: string
  password: string
}

class AuthDataService {
  async login({
    email,
    password,
  }: UserProps): Promise<AxiosResponse<any, any>> {
    return await http.post('https://reqres.in/api/login', {
      email,
      password,
    })
  }
}

export default new AuthDataService()
