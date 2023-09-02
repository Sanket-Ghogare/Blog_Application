import axios from 'axios';
import { API_NOTIFICATION_MESSAGE, SERVICES_URLS } from '../constants/config';
import { getAccessToken , getType} from '../utils1/commonutils.js';

const API_URL = 'http://localhost:8000';

const axiosInstance = axios.create({
    baseURL:API_URL,
    timeout:10000,
    header: {
        "content-type": "application/json"
    }

})

axiosInstance.interceptors.request.use(
    function(config){
     if (config.TYPE.params){
     config.params = config.TYPE.params;

     }else if(config.TYPE.query){
        config.url = config.url + '/' + config.TYPE.query;
     }
     return config;
    },
    function(error){
        return Promise.reject(error);
    }

)

axiosInstance.interceptors.response.use(
    function(response){
        //stop global loader here
        return processResponse(response);
    },
    function(error){
        // stop global loader here
        return Promise.reject(proccessError(error));

    }
)

// if success== return{issues: true, data:object}
//if fails:return {isfailure: true, status:string, msg:string,code:int}

const processResponse = (response) =>{
    if(response?.status===200){
        return{isSuccess:true, data:response.data}
    }
    else{
        return{
            isFailure: true,
            status:response.status,
            msg:response?.msg,
            code:response?.code
        }
    }
}

// if success== return{issues: true, data:object}
//if fails:return {isfailure: true, status:string, msg:string,code:int}

const proccessError = (error)=>{
       if(error.response){
        // request made ane sever responded with the status other 
        // that falls outof the range 
        console.log('ERROR IN RESPONSE:', error.toJSON());
        return{
        isError:'true',
        msg:API_NOTIFICATION_MESSAGE.responseFailure,
        code:error.response.status
        }
       }
       else if(error.request){
        // request made but no response received
        console.log('ERROR IN REQUEST:', error.toJSON());
        return{
        isError:'true',
        msg:API_NOTIFICATION_MESSAGE.requestFailure,
        code:""
        }

       }
       else{
        // something happend in setting up request that trigger an error
        console.log('ERROR IN NETWORK:', error.toJSON());
        return{
        isError:'true',
        msg:API_NOTIFICATION_MESSAGE.networkError,
        code:""
        }

       }

}

const API = {};

for(const [key, value] of Object.entries(SERVICES_URLS)) {
    API[key] = (body, showUploadProgress, showDownloadProgress) =>
        axiosInstance({
            method:value.method,
            url:value.url,
            data:value.method === 'DELETE'  ? {} : body,
            responseType: value.responseType,
            headers:{
                authorization:getAccessToken()
            },
            TYPE: getType(value, body),
            onUploadProgress:function (progressEvent){
                if(showUploadProgress){
                    let percentageCompleted = Math.round((progressEvent.loaded * 100) / ProgressEvent.total)
                    showUploadProgress(percentageCompleted);
                }
            },
        onDownloadProgress: function(progressEvent){
            if(showDownloadProgress){
                let percentageCompleted = Math.round((progressEvent.loaded * 100) / ProgressEvent.total)
                showDownloadProgress(percentageCompleted);
            }
        }
        })
    }

export {API};