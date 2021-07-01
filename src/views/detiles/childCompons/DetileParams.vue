<template>
    <div class="params">
        <table class="tables-tr">
            <tr
            v-for="(item,index) in params.tables"
            :key="index"
            >
                <td 
                v-for="(text, textIndex) in item"
                :key="textIndex"
                class="tables-td">
                    {{text}}
                </td>
            </tr>
        </table>
        <table class="set">
            <tr class="set-tr"
            v-for="(item,index) in params.set"
            :key="index">
                <td class="info-param-key ">{{ item.key }}</td>
                <td style="color: #eb4868">{{ item.value }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    // name: "DetailParams",
    props: {
        params:{}
    }
}
</script>
<style scoped>
/* .tables-tr {
    border-bottom: 1px solid #ccc;
}
.set-tr {
    border-bottom: 1px solid #ccc;
}
.tables-td {
    padding: 10px 30px 10px 0;
    
} */
table tr td {
    border-bottom: 1px solid rgba(100,100,100,.1);
  }table tr {
    height: 42px;
  }table {
    width: 100%;
    border-collapse: collapse;
  }.info-param-key {
    /*当value的数据量比较大的时候, 会挤到key,所以给一个固定的宽度*/
    width: 95px;
  }
</style>