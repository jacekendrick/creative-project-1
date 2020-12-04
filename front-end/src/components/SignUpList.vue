<template>
<div class="all-people">
    <div v-for="person in list" :key="person.id">
        <div class="personInfo">
            <h3>{{person.firstName}} {{person.lastName}}</h3>
            <ul>
                <li>Email: {{person.email}} </li>
                <li>Hometown: {{person.hometown}} </li>
                <li>Signed Up: {{person.date}} </li>
            </ul>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'SignUpList',
    props: {
        list: Array
    }
}
</script>

<style scoped>
.all-people {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
.personInfo {
    text-align: center;
    padding: 10px;
    margin-left: 5px;
    margin-right: 5px;
    background: #f2f2f2
}
.personInfo ul {
    list-style-type: none;
    text-align: center;
    margin: 0;
    padding: 0;
}
</style>