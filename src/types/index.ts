export interface SidebarItem {
  title: string;
  id?: string;
  endpoints?: SidebarItem[];
}

export interface Endpoint {
  id: string;
  method: string;
  path: string;
  description: string;
  exampleTitle: string;
  response: object;
}
