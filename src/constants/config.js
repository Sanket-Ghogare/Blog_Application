// API_Notification_Message

export const API_NOTIFICATION_MESSAGE= {
    loading:{
        title:'Loading...',
        message:'Data is bring Loaded, Please wait'
    },
    sucess:{
        title:'Success',
        message:'Data successfully loaded'
    },
    responseFailure:{
        title: 'error',
        message: 'an Error occured  while fetching respose from the server. Please Try Again'
    },
    requestFailure:{
        title:'error',
        message:'An error occured while parsing the data'
    },
    networkError:{
        title:'error',
        message: 'unable to connect with the server. please check the internet connectivity and try again later'
    }
}

// API service call
// need service call :{url:"", method:'post/delete/put/Get',
// params: true/ false , query:true/false}

export const SERVICES_URLS={
    userSignup:{url:'/signup', method:'post'},
    userLogin :{url:'/login', method:'post'},
    uploadFile:{url:'/file/upload', method:'post'},
    createPost:{url:'create', method:'post'},
    getAllPosts:{url:'/posts', method:'Get', params: true},
    getPostById:{url:'/post', method:'Get', query:true},
    updatePost:{url:'update', method:'PUT', query:true},
    deletePost:{url:'delete', method:'DELETE', query:true},
    newComment:{url:'/comment/new', method:'POST'},
    getAllComments:{url:'comments', method:'GET', query:true},
    deleteComment:{url:'comment/delete', method:'DELETE', query:true},

    // getUsers:{url:'admin/about', method:'Get',query:true}
    getUsers:{url:'/getAllUser', method:'Get',query:true},
     
    getUser:{url:'/getUser', method:'Get',query:true},

    getComment:{url:'/getComments', method:'Get',query:true},

    getAdmin:{url:'/isAdmin',method:'Get',query:true}

}
