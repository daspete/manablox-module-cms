<template>
    <div class="component component--content-block">
        <div class="row pt-3 pb-3">
            <div class="col-12">
                <Label>Headline</Label>
                <Input v-model="propData.headline"/>
            </div>
            <div class="col-12">
                <Label>Subline</Label>
                <Input v-model="propData.subline"/>
            </div>
            <div class="col-12">
                <Label>Content</Label>
                <no-ssr>
                    <editor v-model="propData.content" />
                </no-ssr>
                <!-- <Input v-model="propData.content"/> -->
            </div>
        </div>
    </div>
</template>

<script>
import Helper from '~cms/utils/Helper'

export default {
    name: 'ContentBlockAdmin',

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
        }
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
