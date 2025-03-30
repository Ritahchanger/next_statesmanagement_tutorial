import { AppDispatch } from "../Store";

import { useDispatch, } from "react-redux";


const useAppDispatch = useDispatch<AppDispatch>()




export { useAppDispatch }