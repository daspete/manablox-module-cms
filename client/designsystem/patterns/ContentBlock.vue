<template>
    <div class="component component--content-block">
        <h1 v-html="headline" />
        <h2 v-html="subline" />
        <div v-html="content" />
    </div>
</template>

<script>
import Helper from '~cms/utils/Helper'

export default {
    name: 'ContentBlock',

    props: {
        headline: {
            type: String,
            default: 'Headline'
        },
        subline: {
            type: String,
            default: 'Subline'
        },
        content: {
            type: String,
            default: 'Content'
        },
    },

    data(){
        let data = Helper.PropsToData(this);
        return data;
    },

    watch: {
        propData: {
            deep: true,
            handler: function(value){
                this.$emit('input', value);
            }
        }

    }
}
</script>
