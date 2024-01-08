import { Project } from "./project";

export interface CartProject extends Project {
    counter: number;
    total: number;
}