const mapping: Record<string, string> = {
  orders: 'order',
  organizations: 'organization',
  reviews: 'review',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
