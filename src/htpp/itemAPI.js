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

export const createDevice = async (item) => {
  const { data } = await $authHost.post('api/item', item);
  return data;
};

export const fetchDevices = async (categoryId, CollectionId, page, limit = 5) => {
  const { data } = await $host.get('api/item', {
    params: {
      categoryId,
      CollectionId,
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
