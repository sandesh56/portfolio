import { IForm } from "types/form";
import { AxiosBlogInstance, AxiosInstance } from "./config/AxiosInstance";

export const getData = async () => {
    try {
        const response = await AxiosInstance.get('/portfolio');
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const postData = async (data: IForm): Promise<{ success: boolean, result: string }> => {

        const response = await AxiosInstance.post('/portfolio/mail', data);
        return response.data; 
}

export const getBlogData = async () => {
    try {
        const response = await AxiosBlogInstance.get("");
        return response.data;
    } catch (error) {
        console.error(error);
    }
}