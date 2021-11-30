const getList = (author, keyword) => {
    return [
        {
            id:1,
            title: 'a',
            content: 'a',
            createTime: 1546610491112,
            author: 'zhangsan'
        },
        {
            id:2,
            title: 'b',
            content: 'b',
            createTime: 1546610492274,
            author: 'lisi'
        }
    ]
}

const getDetail = (id) => {
    return {
            id:3,
            title: 'a',
            content: 'a',
            createTime: 1546610491112,
            author: 'zhangsan'
    }
}

const newBlog = (blogData = {}) => {
    return {
        id: 3
    }
}

const updateBlog = (id, blogData = {}) => {
    return true;
}

const delBlog = (id) => {
    return true;
}

module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    delBlog
}