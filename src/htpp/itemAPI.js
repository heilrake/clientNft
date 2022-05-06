import { $authHost, $host } from './index';
import jwt_decode from 'jwt-decode';

export const createCategory = async (category) => {
  const { data } = await $authHost.post('api/category', category);
  return data;
};

export const fetchCategory = async () => {
  const { data } = await $host.get('api/category');
  return data;
};

export const createCollection = async (collection) => {
  const { data } = await $authHost.post('api/collection', collection);
  return data;
};

export const fetchCollection = async () => {
  const { data } = await $host.get('api/collection');
  return data;
};

export const createDevice = async (device) => {
  const { data } = await $authHost.post('api/device', device);
  return data;
};

export const fetchDevices = async (categoryId, brandId, page, limit = 5) => {
  const { data } = await $host.get('api/item', {
    params: {
      categoryId,
      brandId,
      page,
      limit,
    },
  });
  return data;
};

export const fetchOneDevice = async (id) => {
  const { data } = await $host.get('api/item/' + id);
  return data;
};
