<template>
    <div class="container">
        <router-view :key="$route.path" name="header"></router-view>
        <router-view :key="$route.fullPath" ></router-view>
        <router-view :key="$route.path" name="footer"></router-view>
    </div>
</template>

<script>
export default {
    name: 'AppComponent',
}
</script>
