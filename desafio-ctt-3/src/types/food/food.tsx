export interface IFood {
  meals: IFoodItem[];
}

export interface IFoodItem {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}