import api from "./api";


export const getProfile = ()=>{

    // return api.get("/users/profile");
    return api.get("/clients/profile");

};



export const updateProfile = (data)=>{

    return api.put(
        "/clients/profile",
        data
    );

};