import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/lib/store";

export const useTypedSelector = useSelector.withTypes<RootState>();

export const useTypedDispatch = useDispatch.withTypes<AppDispatch>();
