import type { SidebarItem } from '../types';
import { endpoints } from './endpoints';

export const sidebar: SidebarItem[] = endpoints.map((endpoint) => {
  return {
    title: endpoint.title,
    id: endpoint.id,
    endpoints: endpoint.endpoints.map((ep) => ({
      title: ep.path,
      id: `#${ep.id}`,
    })),
  };
});
