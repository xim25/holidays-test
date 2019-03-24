import axios from 'axios';
import { base_url } from './base_url';

export const getHolidays = (data) => {
    return axios.get(`${base_url}${data.year}/${data.country}`)
}