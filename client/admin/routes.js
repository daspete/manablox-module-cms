let routes = null

try{
    routes = {
        name: 'admin_cms_index',
        component: require('~cms/admin/pages/index.vue').default,
        children: [
            {
                path: 'create',
                name: 'admin_cms_create',
                component: require('~cms/admin/pages/create.vue').default
            }
        ]
    }
}catch(e){}

export default routes
