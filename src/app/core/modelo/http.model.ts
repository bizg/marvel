export interface Http {
  code: number;
  data: {
    count?: number;
    limit?: number;
    offset?: number;
    results: any;
    total?: number;
  };
  status: string;
}
