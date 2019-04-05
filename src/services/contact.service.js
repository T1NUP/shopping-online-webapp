import { http } from "./http.service";


export class ContactService {

    submitContact (form){
        return http.post(form);
    }
}