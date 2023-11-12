export type Task = {
  id: string;
  todo: string;
  category: string | undefined;
  details?: string;
  important: boolean;
};
