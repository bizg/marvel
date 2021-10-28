export interface Http {
  code: number;
  data: {
    count?: number;
    limit?: number;
    offset?: number;
    results: object;
    total?: number;
  };
  status: string;
}
