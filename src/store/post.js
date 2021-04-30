import PostService from "@/services/PostService"

export default {
    namespaced: true,
    state: () => ({
        post: null,
        posts: []
    }),
    actions: {
        async getAll(ctx) {
            const posts = await PostService.getAll()
            ctx.commit('setPosts', posts)
        },
        async getById(ctx, id) {
            const post = await PostService.getById(id)
            ctx.commit('setPost', post)
        },
        async update(ctx, post) {
            const newPost = await PostService.update(post)
            ctx.commit('setPost', newPost)
        },
        async create(ctx, post) {
            const newPost = await PostService.create(post)
            ctx.commit('setPost', newPost)
        },
        async delete(ctx, id) {
            await PostService.delete(id)
        }
    },
    mutations: {
        setPosts: (state, payload) => state.posts = payload,
        setPost: (state, payload) => state.post = payload,
    },
    getters: {
        getPosts: state => state.posts,
        getPost: state => state.post
    }

}
