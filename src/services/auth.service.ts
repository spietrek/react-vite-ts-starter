/* eslint-disable @typescript-eslint/no-explicit-any */
import http from './http.service'
import { AxiosResponse } from 'axios'

interface UserProps {
  email: string
  password?: string
}

class AuthDataService {
  async register({
    email,
    password,
  }: UserProps): Promise<AxiosResponse<any, any>> {
    return await http.post('https://reqres.in/api/register', {
      email,
      password,
    })
  }

  async login({
    email,
    password,
  }: UserProps): Promise<AxiosResponse<any, any>> {
    return await http.post('https://reqres.in/api/login', {
      email,
      password,
    })
  }

  async loginFail({ email }: UserProps): Promise<AxiosResponse<any, any>> {
    return await http.post('https://reqres.in/api/login', {
      email,
    })
  }
}

export default new AuthDataService()
