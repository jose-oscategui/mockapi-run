import { endpoints } from '@/data/endpoints/registry';

export interface SidebarItem {
  title: string;
  id?: string;
  endpoints?: SidebarItem[];
}

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
