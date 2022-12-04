<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Example Header</div>

                    <div class="card-body">
                        I'm an example Header.
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HeaderComponent',
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
