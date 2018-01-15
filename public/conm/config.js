const manageMenu = [
    {
        name: '商品列表',
        url:'/manage/proList',
        childUrl:[
            '/manage/proList',
            '/manage/uploadImg',
            '/manage/descPro/',
            '/manage/editPro/',
            '/manage/searchPro'
            
        ],
    },{
        name: '用户列表',
        url:'/manage/getUser',
        childUrl:[
            '/manage/getUser',
            '/manage/register',
            'registering',
        ],
    },{
        name: '分类列表',
        url:'/manage/editSorts',
        childUrl:[
            '/manage/editSorts',
        ],
    },{
        name: '公司介绍',
        url:'/manage/aboutUs',
        childUrl:[
            '/manage/aboutUs',
            '/manage/editAboutUs',
            '/manage/viewAboutus'
        ],
    }
]

const defaultUserPagesize = 9


const Menu = [
    {
        name: 'HOME',
        url:'/page',
        childUrl:[
            '/page',
            '/atlas',
            
        ],
    },{
        name: 'ABOUT US',
        url:'/aboutUs',
        childUrl:[
            '/aboutUs',
        ],
    },{
        name: 'PRODUCTS',
        url:'/products/',
        childUrl:[
            '/products/',
            '/proSearch',
            '/proDesc'
        ],
    },{
        name: 'CONTACT',
        url:'/contact',
        childUrl:[
            '/contact'
        ],
    }
]