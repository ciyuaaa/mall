<template>
    <div>
        <center-top-bar text="分类"></center-top-bar>
        <nav-bar :titles="categoryList" @navClick="navClick">
            <category-menu :categoryMenu="subCategory[navBarCurrentIndex]">
                <category-content-detail 
                :titels="['综合', '新品', '销量']" 
                :goods="subCategoryDetail"
                @tabClick="tClick"
                />
            </category-menu>
        </nav-bar>
    </div>
</template>
<script>
import {category,getSubCategory,getSubCategoryDetail} from 'network/category'

import NavBar from "./childComps/NavBar.vue"
import CategoryMenu from "./childComps/CategoryMenu.vue"
import CategoryContentDetail from "./childComps/CategoryContentDetail.vue"
import CenterTopBar from "components/content/CenterTopBar"

export default {
    name: "Category",
    data() {
        return {
            categoryList: [],
            subCategory: [],
            subCategoryDetail: [],
            type: ['pop', 'new', 'sell'],
            miniWallkey: 0,
            navBarCurrentIndex: 0,
            clBarCurrentIndex: 0,
        }
    },
    components: {
        NavBar,
        CategoryMenu,
        CenterTopBar,
        CategoryContentDetail
    },
    created() {
        category.then((data) => {
            this.categoryList = data.category.list
            this._getSubCategory()
            this.miniWallkey = this.categoryList[this.navBarCurrentIndex].miniWallkey
            this._getSubCategoryDetail(this.miniWallkey, this.type[this.clBarCurrentIndex])
        })
        
    },
    methods: {
        _getSubCategory() {
            this.categoryList.forEach((item) => {
                getSubCategory(item.maitKey).then((data) => {
                    this.subCategory.push(data.list)
                })
            })
        },
        _getSubCategoryDetail(miniWallkey, type) {
            getSubCategoryDetail(miniWallkey, type).then((data) => {
                this.subCategoryDetail = data
            })
        },
        navClick(index) {
            this.miniWallkey = this.categoryList[index].miniWallkey
            this._getSubCategoryDetail(this.miniWallkey, this.type[this.clBarCurrentIndex])
            this.navBarCurrentIndex = index
        },
        tClick(index) {
            console.log(index, this.type[this.clBarCurrentIndex])
            this.clBarCurrentIndex = index
            this._getSubCategoryDetail(this.miniWallkey, this.type[this.clBarCurrentIndex])
        }
    }
}
</script>
<style scoped>

</style>