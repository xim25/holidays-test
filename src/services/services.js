import axios from 'axios';
import { base_url } from './base_url';

export const getHolidays = (data) => {
    axios.get(`${base_url}${data.year}/${data.country}`)
}