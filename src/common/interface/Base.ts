export interface ISelectOption {
  label: string;
  value: number | string;
}

export interface IResponse<M> {
  loading: boolean;
  page: number;
  resultCount: number;
  results: M[];
}

export interface IListQuery {
  term?: string;
}

export const getListQuery = (query: IListQuery) => {
  const { term } = query;

  let rs = "?";
  term && (rs += `&term=${term}`);

  return rs;
};
