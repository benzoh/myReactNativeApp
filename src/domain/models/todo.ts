export interface Model {
  readonly id: string;
  readonly title: string;
  readonly detail?: string;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly completedAt: string | null;
}
