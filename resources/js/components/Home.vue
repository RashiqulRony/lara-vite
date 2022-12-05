<template>
    <div class="row mt-5">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">Test Data</div>

                <div class="card-body">
                    <table class="table table-bordered table-hover">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Body</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="post in posts">
                            <td>{{ post.id }}</td>
                            <td>{{ post.title }}</td>
                            <td><div v-html="post.body"></div></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                posts: [],
            }
        },
        mounted() {
            this.getData()
        },
        methods: {
            getData() {
                axios.get(this.API.getPosts)
                    .then((response) => response.data)
                    .then((response) => {
                        this.posts = response
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            },
        }
    }
</script>
