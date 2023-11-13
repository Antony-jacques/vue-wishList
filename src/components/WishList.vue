<template>
    <div>
        <div class="wishItem" v-for="item in fakeData " :key="item.title">
            <div class="item-title">
                <h3>{{ item.title }}</h3>
            </div>
            <div>
                {{ item.description }}
            </div>
            <div>
                {{ item.price }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: [ 'fakeData' ],
    setup(props){
        console.log(props.fakeData)
    }
}
</script>

<style>

</style>