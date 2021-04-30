import {api} from "@/helpers/api"

class PostService {

    async getAll() {
        try {
            const res = await api.get('/posts/')
            return res.data
        } catch (e) {throw e}
    }

    async getById(id) {
        try {
            const res = await api.get(`/posts/${id}/`)
            return res.data
        } catch (e) {throw e}
    }

    async create(post) {
        try {
            const res = await api.post('/posts/', post)
            return res.data
        } catch (e) {throw e}
    }

    async update(post) {
        try {
            const res = await api.put(`/posts/${post.id}/`, post)
            return res.data
        } catch (e) {throw e}
    }

    async delete(id) {
        try {
            const res = await api.delete(`/posts/${id}/`)
            return res.data
        } catch (e) {throw e}
    }

}

export default new PostService()
