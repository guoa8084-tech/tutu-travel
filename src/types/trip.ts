// 行程相关的核心数据结构（来自 MVP.md）。
// 目前仅作为类型定义，业务逻辑后续再实现。

export type TripStyle = "省钱型" | "经典型" | "深度体验型";

export type DayPlan = {
  day: number;
  title: string;
  morning: string;
  afternoon: string;
  evening: string;
  food: string[];
  transport: string;
};

export type BudgetItem = {
  category: string;
  amount: number;
  note: string;
};

export type PackingItem = {
  category: string;
  items: string[];
};

export type TripPlan = {
  id: string;
  title: string;
  destination: string;
  days: number;
  style: TripStyle;
  summary: string;
  itinerary: DayPlan[];
  budget: BudgetItem[];
  packingList: PackingItem[];
  tips: string[];
};
